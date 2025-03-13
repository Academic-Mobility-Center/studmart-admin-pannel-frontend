import { 
    Form, 
    Upload, 
    Button,
    type UploadProps,
    message 
} from "antd";
import { UploadOutlined } from '@ant-design/icons';


const LogoUpload = () => {
    const props: UploadProps = {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        headers: {
          authorization: 'authorization-text',
        },
        // beforeUpload: (file) => {
        //     const isPhoto = file.type === 'image/png' || 'image/jpeg' || 'image/svg';
        //     if (!isPhoto){
        //         message.error(`${file.name} is not a photo`);
        //     }
        //     return isPhoto || Upload.LIST_IGNORE;
        // },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
    };

    return(
        <Form.Item 
            name={"logo"} 
            label="Логотип партнёра" 
            rules={[{required: true, message: "Загрузите логотип партнера"}]}
        >
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>Загрузить</Button>
            </Upload>                    
        </Form.Item>
    );
};

export default LogoUpload;