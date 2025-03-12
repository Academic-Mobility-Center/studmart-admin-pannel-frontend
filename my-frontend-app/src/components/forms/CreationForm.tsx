import { FormInstance, Form } from "antd";

interface CreationPageProps{
    children: React.ReactNode;
    form: FormInstance<any>;
    handleSubmit: () => void;
}

const CreationPage: React.FC<CreationPageProps> = ({
    children,
    form,
    handleSubmit
}) => {
    return(
        <Form
            layout="vertical"
            form={form}
            onFinish={handleSubmit}
        >
            {children}
        </Form>
    )
};

export default CreationPage;