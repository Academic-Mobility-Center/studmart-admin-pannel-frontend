import { Button } from "antd";
import PhoneInput from "../inputs/PhoneInput";
import EmailInput from "../inputs/EmailInput";
import PartnerNameInput from "../inputs/PartnerNameInput";
import DescriptionPartnerInput from "../inputs/DescriptionPartnerInput";
import LogoUpload from "../uploads/LogoUpload";
import InnInput from "../inputs/InnInput";
import WebsiteInput from "../inputs/WebsiteInput";
import RegionSelect from "../selects/RegionSelect";
import IndustrySelect from "../selects/IndustrySelect";
import RegionServiceSelect from "../selects/RegionServiceSelect";
import CountrySelect from "../selects/CountrySelect";
import PartnerFormProps from "../../types/PartnerFormProps";

const PartnerForm: React.FC<PartnerFormProps> = ({
    handleChange,
    formProps,
    handleSubmit,
    isEdit
}) => {

    return (
        <div 
            style={{
                display: 'flex', 
                flexDirection: "column", 
                paddingLeft: '20%', 
                paddingRight: '20%', 
                paddingBottom: '200px'
            }}
        >
            <h1>
                {isEdit ? "Форма редактирования" : "Форма создания"}
            </h1>
            <PartnerNameInput 
                formProps={formProps} 
                onChange={(e) => handleChange("partnerName", e.target.value)}
            />
            <DescriptionPartnerInput 
                formProps={formProps} 
                onChange={(e) => handleChange("partnerName", e.target.value)}
            />
            <LogoUpload/>
            <InnInput 
                formProps={formProps} 
                onChange={(e) => handleChange("partnerName", e.target.value)}
            />
            <WebsiteInput 
                formProps={formProps} 
                onChange={(e) => handleChange("partnerName", e.target.value)}
            />
            <RegionSelect 
                formProps={formProps} 
                onChange={(value) => handleChange("region", value)}
            />
            <IndustrySelect 
                formProps={formProps} 
                onChange={(value) => handleChange("industry", value)}
            />
            <EmailInput 
                formProps={formProps} 
                onChange={(e) => handleChange("phone", e.target.value)}
            />
            <PhoneInput 
                formProps={formProps} 
                onChange={(e) => handleChange("phone", e.target.value)}
            />
            <RegionServiceSelect 
                formProps={formProps}
                onChange={(value) => handleChange("serviceRegion", value)}
            />
            <CountrySelect 
                formProps={formProps}
                onChange={(value) => handleChange("country", value)}
            />
            <Button 
                type="primary" 
                style={{width: '30%'}} 
                onClick={handleSubmit}
            >
                Сохранить
            </Button>
        </div>
    )
};

export default PartnerForm;