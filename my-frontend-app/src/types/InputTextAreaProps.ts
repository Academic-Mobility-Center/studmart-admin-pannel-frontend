import FormProps from "./FormProps";

export default interface InputTextAreaProps{
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined
    formProps: FormProps
}