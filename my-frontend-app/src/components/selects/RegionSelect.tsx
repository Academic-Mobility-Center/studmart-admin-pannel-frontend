import { Form, Select } from "antd";
import SelectProps from "../../types/Select";

const RegionSelect: React.FC<SelectProps> = ({
    formProps,
    onChange
}) => {
    const regionSelectProps = [
        { value: 'russia', label: "Russia" },
        { value: 'usa', label: "USA" },
    ]
    return(    
    <Form.Item 
        name="region" 
        label="Регион представления"
        rules={[{required: false}]}
    >
        <Select 
            value={formProps.region} 
            options={regionSelectProps} 
            onChange={onChange} 
        />
    </Form.Item>
    );

};
export default RegionSelect;