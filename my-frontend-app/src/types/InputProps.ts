import FormProps from "./FormProps";

export default interface InputProps{
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    formProps: FormProps
}