import { Form, Select } from "antd";
import SelectProps from "../../types/Select";

const IndustrySelect: React.FC<SelectProps> = ({
    formProps,
    onChange
}) => {
    const industrySelectProps = [
        { value: 'one', label: "One" },
        { value: 'two', label: "Two" },
        { value: 'three', label: "Three" },
    ]

    return (
        <Form.Item label="Отрасль">
        <Select 
            value={formProps.industry} 
            options={industrySelectProps} 
            onChange={onChange} 
        />
    </Form.Item>
    )
};

export default IndustrySelect;