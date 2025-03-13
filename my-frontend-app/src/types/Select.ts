import FormProps from "./FormProps";

export default interface SelectProps{
    formProps: FormProps;
    onChange?: ((value: string, option?: {
        value: string;
        label: string;
    } | {
        value: string;
        label: string;
    }[] | undefined) => void) | undefined;
}