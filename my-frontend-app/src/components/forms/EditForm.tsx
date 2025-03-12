import { FormInstance, Form } from "antd";
import FormProps from "../../types/FormProps";

interface EditFormProps{
    children: React.ReactNode;
    form: FormInstance<any>;
    handleSubmit: () => void;
    formProps: FormProps;
}

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