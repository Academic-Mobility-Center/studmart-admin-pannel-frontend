import {useState} from "react";
import { Form} from "antd";
import FormProps from "../../types/FormProps";
import PartnerForm from "../forms/PartnerForm";
import EditForm from "../forms/EditForm";
const Edit = () => {
    const [form] = Form.useForm();

    const [formProps, setFormProps] = useState<FormProps>({
        partnerName: "Иван",
        description: "hello",
        logo: {},
        inn: "1234567890",
        website: "https://www.example.ru",
        region: "usa",
        industry: "one",
        email: "admin@example.com",
        phone: "+78005553535",
        serviceRegion: "usa",
        country: "russia",
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
    return(
        <EditForm form={form} handleSubmit={handleSubmit} formProps={formProps}>
            <PartnerForm handleChange={handleChange} formProps={formProps} handleSubmit={handleSubmit} isEdit={true}/>
        </EditForm>
    )

};

export default Edit;