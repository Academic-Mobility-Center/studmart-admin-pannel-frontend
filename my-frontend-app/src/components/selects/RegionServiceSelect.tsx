import { 
    Form,
    Select
} from "antd";
import SelectProps from "../../types/Select";

const RegionServiceSelect: React.FC<SelectProps> = ({
    formProps,
    onChange
}) => {
    const regionSelectProps = [
        { value: 'russia', label: "Russia" },
        { value: 'usa', label: "USA" },
    ]
    return (
        <Form.Item 
        name={"serviceRegion"} 
        label="Регион представления услуг" 
        rules={[{ required: true }]}
    >
        <Select 
            value={formProps.serviceRegion} 
            options={regionSelectProps} 
            onChange={onChange} 
        />
    </Form.Item>
    )
};

export default RegionServiceSelect;