import { Form, Input } from "antd";
import InputProps from "../../types/InputProps";
const InnInput: React.FC<InputProps> = ({
    formProps,
    onChange
}) => {
    const innRegex = /^\d{10}(\d{2})?$/;

    return(
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
            onChange={onChange}
            placeholder="ИНН (10 или 12 цифр)"
        />
    </Form.Item>
    )
};

export default InnInput;