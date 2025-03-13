import { Form, Input } from "antd";
import InputProps from "../../types/InputProps";

const EmailInput: React.FC<InputProps> = ({
    formProps,
    onChange
}) => {
    return(
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
            onChange={onChange} 
            placeholder="example@email.com"
            allowClear
        />
    </Form.Item>
    )
};
export default EmailInput;