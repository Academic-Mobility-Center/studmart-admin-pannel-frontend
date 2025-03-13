import { FormInstance } from "antd";
export default interface CreationPageProps{
    children: React.ReactNode;
    form: FormInstance<any>;
    handleSubmit: () => void;
}