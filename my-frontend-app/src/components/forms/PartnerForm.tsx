import { 
    Button, 
    Form, 
    Input, 
    Select, 
    Upload,
    message,
    type UploadProps 
} from "antd";
import FormProps from "../../types/FormProps";
import { UploadOutlined } from '@ant-design/icons';

interface PartnerFormProps{
    handleChange: (field: keyof FormProps, value: string) => void;
    formProps: FormProps;
    handleSubmit: () => void;
    isEdit: boolean;
}

const PartnerForm: React.FC<PartnerFormProps> = ({
    handleChange,
    formProps,
    handleSubmit,
    isEdit
}) => {
    
    const {TextArea} = Input;
    const {Option} = Select;
    const phoneRegex = /^(\+7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
    const innRegex = /^\d{10}(\d{2})?$/;
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.-]*)*\/?$/i;
    const textRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;

    const industrySelectProps = [
        { value: 'one', label: "One" },
        { value: 'two', label: "Two" },
        { value: 'three', label: "Three" },
    ]

    const regionSelectProps = [
        { value: 'russia', label: "Russia" },
        { value: 'usa', label: "USA" },
    ]

    const props: UploadProps = {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        headers: {
          authorization: 'authorization-text',
        },
        // beforeUpload: (file) => {
        //     const isPhoto = file.type === 'image/png' || 'image/jpeg' || 'image/svg';
        //     if (!isPhoto){
        //         message.error(`${file.name} is not a photo`);
        //     }
        //     return isPhoto || Upload.LIST_IGNORE;
        // },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
    };

    const selectBefore = (
        <Select defaultValue="http://">
          <Option value="http://">http://</Option>
          <Option value="https://">https://</Option>
        </Select>
    );

    const selectAfter = (
        <Select defaultValue=".com">
            <Option value=".com">.com</Option>
            <Option value=".ru">.ru</Option>
            <Option value=".net">.net</Option>
            <Option value=".org">.org</Option>
        </Select>
    );

    return (
        <div 
            style={{
                display: 'flex', 
                flexDirection: "column", 
                paddingLeft: '20%', 
                paddingRight: '20%', 
                paddingBottom: '200px'
            }}
        >
        <h1>{isEdit ? "Форма редактирования" : "Форма создания"}</h1>
            <Form.Item 
                name={"partnerName"} 
                label={"Название партнёра"} 
                rules={[
                    {required: true, message: "Введите название партнера"},
                    {pattern: textRegex, message: "Введите текст, содержащий только буквы и пробелы"}
                ]}
            >
                <Input 
                    value={formProps.partnerName} 
                    onChange={(e) => handleChange("partnerName", e.target.value)} 
                    allowClear
                />
            </Form.Item>
            <Form.Item 
                name={"description"} 
                label="Описание партнёра" 
                rules={[
                    {required: true, message: "Введите описание партнёра"},
                    {pattern: textRegex, message: "Введите текст, содержащий только буквы и пробелы"}
                ]}
            >
                <TextArea
                    value={formProps.description}
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    onChange={(e) => handleChange("description", e.target.value)}
                    allowClear
                />
            </Form.Item>
            <Form.Item 
                name={"logo"} 
                label="Логотип партнёра" 
                rules={[{required: true, message: "Загрузите логотип партнера"}]}
            >
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Загрузить</Button>
                </Upload>                    
            </Form.Item>
            <Form.Item 
                name={"inn"} 
                label="ИНН компании" 
                rules={[
                    { required: true, message: "Введите ИНН" },
                    {
                    pattern: innRegex,
                    message: "Введите корректный ИНН",
                    },
                ]}
            >
                <Input 
                    value={formProps.inn} 
                    onChange={(e) => handleChange("inn", e.target.value)}
                    placeholder="ИНН (10 или 12 цифр)"
                />
            </Form.Item>
            <Form.Item 
                name={"website"} 
                label="Сайт компании" 
                rules={[
                    { required: true, message: "Введите веб-сайт" },
                    {pattern: urlPattern, message: "Введите корректный url, например: https://www.example.ru "}
                ]}
            >
                <Input 
                    value={formProps.website} 
                    onChange={(e) => handleChange("website", e.target.value)}
                    // addonBefore={selectBefore} 
                    // addonAfter={selectAfter}
                />
            </Form.Item>
            <Form.Item label="Регион представления">
                <Select 
                    value={formProps.region} 
                    options={regionSelectProps} 
                    onChange={(value) => handleChange("region", value)} 
                />
            </Form.Item>
            <Form.Item label="Отрасль">
                <Select 
                    value={formProps.industry} 
                    options={industrySelectProps} 
                    onChange={(value) => handleChange("industry", value)} 
                />
            </Form.Item>
            <Form.Item 
                name={"email"} 
                label="Контактный email" 
                rules={[
                    { required: true, message: "Введите e-mail" },
                    { type: "email", message: "Введите корректный e-mail" }
                ]}
            >
                <Input 
                    value={formProps.email} 
                    onChange={(e) => handleChange("email", e.target.value)} 
                    placeholder="example@email.com"
                    allowClear
                />
            </Form.Item>
            <Form.Item 
                name={"phone"} 
                label="Контактный номер телефона" 
                rules={[
                    { required: true, message: "Введите номер телефона" },
                    {
                    pattern: phoneRegex,
                    message: "Введите корректный номер телефона",
                    },
                ]}
            >
                <Input 
                    value={formProps.phone} 
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+7 (XXX) XXX-XX-XX"
                    allowClear 
                />
            </Form.Item>
            <Form.Item 
                name={"serviceRegion"} 
                label="Регион представления услуг" 
                rules={[{ required: true }]}
            >
                <Select 
                    value={formProps.serviceRegion} 
                    options={regionSelectProps} 
                    onChange={(value) => handleChange("serviceRegion", value)} 
                />
            </Form.Item>
            <Form.Item 
                label="Страна представления"
                name="country"
                rules={[{ required: false }]}
            >
                <Select 
                    value={formProps.country} 
                    options={regionSelectProps} 
                    onChange={(value) => handleChange("country", value)} 
                />
            </Form.Item>
            <Button type="primary" style={{width: '30%'}} onClick={handleSubmit}>Сохранить</Button>
        </div>
    )
};


export default PartnerForm;