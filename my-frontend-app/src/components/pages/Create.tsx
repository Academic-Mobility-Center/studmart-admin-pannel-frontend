import {useState} from "react";
import { Form} from "antd";
import CreationPage from "../forms/CreationForm";
import FormProps from "../../types/FormProps";
import PartnerForm from "../forms/PartnerForm";

const Create = () => {
    const [form] = Form.useForm();

    const [formProps, setFormProps] = useState<FormProps>({
        partnerName: "",
        description: "",
        logo: {},
        inn: "",
        website: "",
        region: "",
        industry: "",
        email: "",
        phone: "",
        serviceRegion: "",
        country: "",
    });

    const handleChange = (field: keyof FormProps, value: string) => {
        setFormProps((prev) => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = () => {
        console.log("Data: ", formProps)
    }

    return (
        <CreationPage form={form} handleSubmit={handleSubmit}>
            <PartnerForm 
                formProps={formProps} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                isEdit={false}
            />
        </CreationPage>
    )
};

export default Create;