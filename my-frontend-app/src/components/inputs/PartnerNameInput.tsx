import { Form, Input } from "antd";
import InputProps from "../../types/InputProps";

const PartnerNameInput: React.FC<InputProps> = (
{
    formProps, 
    onChange
}) => {
    const textRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;

    return(
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
            onChange={onChange} 
            allowClear
        />
    </Form.Item>
    )
};

export default PartnerNameInput;