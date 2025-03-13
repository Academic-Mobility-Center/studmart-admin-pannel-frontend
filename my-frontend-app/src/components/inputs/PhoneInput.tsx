import 
{
    Form,
    Input
} from 'antd';
import InputProps from '../../types/InputProps';

const PhoneInput: React.FC<InputProps> = ({
    onChange,
    formProps
}) => {
    const phoneRegex = /^(\+7|8)?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;

    return(
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
            onChange={onChange}
            placeholder="+7 (XXX) XXX-XX-XX"
            allowClear 
        />
    </Form.Item>
    )
};

export default PhoneInput;            