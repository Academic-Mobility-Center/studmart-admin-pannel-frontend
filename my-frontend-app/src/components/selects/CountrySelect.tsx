import { Form, Select } from "antd";
import SelectProps from "../../types/Select";

const CountrySelect: React.FC<SelectProps> = ({
    formProps,
    onChange
}) => {
    const regionSelectProps = [
        { value: 'russia', label: "Russia" },
        { value: 'usa', label: "USA" },
    ]
    return (
        <Form.Item 
        label="Страна представления"
        name="country"
        rules={[{ required: false }]}
    >
        <Select 
            value={formProps.country} 
            options={regionSelectProps} 
            onChange={onChange} 
        />
    </Form.Item>
    )
};

export default CountrySelect;