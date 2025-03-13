import { Form } from "antd";
import EditFormProps from "../../types/EditFormProps";

const EditForm: React.FC<EditFormProps> = ({
    children,
    form,
    handleSubmit,
    formProps
}) => {
    
    return(        
        <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
            initialValues={formProps}
        >
            {children}
        </Form>
    )
};

export default EditForm;