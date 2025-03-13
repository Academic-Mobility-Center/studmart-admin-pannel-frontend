import { Form, Input } from "antd";
import InputProps from "../../types/InputProps";
const WebsiteInput: React.FC<InputProps> = ({
    formProps,
    onChange
}) => {    

    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.-]*)*\/?$/i;
    return(
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
            onChange={onChange}
        />
    </Form.Item>
    )
};
export default WebsiteInput;