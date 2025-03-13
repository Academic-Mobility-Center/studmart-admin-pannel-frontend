import { FormInstance } from "antd";
import FormProps from "./FormProps";
export default interface EditFormProps{
    children: React.ReactNode;
    form: FormInstance<any>;
    handleSubmit: () => void;
    formProps: FormProps;
}