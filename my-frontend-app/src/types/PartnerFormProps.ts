import FormProps from "./FormProps";

export default interface PartnerFormProps{
    handleChange: (field: keyof FormProps, value: string) => void;
    formProps: FormProps;
    handleSubmit: () => void;
    isEdit: boolean;
}