import { Form } from "antd";
import CreationPageProps from "../../types/CreationPageProps";

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