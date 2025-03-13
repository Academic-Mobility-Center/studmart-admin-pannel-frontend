import {Form, Input} from "antd";
import InputTextAreaProps from "../../types/InputTextAreaProps";

const DescriptionPartnerInput: React.FC<InputTextAreaProps> = ({
    formProps,
    onChange
}) => {
    const {TextArea} = Input;
    const textRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;

    return(
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
            onChange={onChange}
            allowClear
        />
    </Form.Item>
    )
};
export default DescriptionPartnerInput;