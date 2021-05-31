import React, {useState} from 'react';
import { Typography, Form, Input, Divider, Button, Layout, Card, Image } from 'antd';

const { Text, Link } = Typography;


export default (props) => {
    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <Layout>
            <Card class="forgot-pass-box">
                <Image src="./assets/logo.svg"/>
                <Typography.Title style={{fontSize: 28}}>
                    {"Forget Your Password"}
                </Typography.Title>
                <Form
                    form={form}
                    layout="vertical"
                    classname="forgot-path-form"

                >
                    <Form.Item label="Email" rules={[{required: true, message: 'Please input your email!!!'}]}>
                        <Input placeholder="input placeholder"/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="forgot-pass-form-button">
                            Send email
                        </Button>
                    </Form.Item>
                </Form>

                <Divider />
                <div className="register-field">
                    <Text>
                        Don't have a account? 
                        <Link className="Signup" href="">
                            Sign up
                        </Link>
                    </Text>
                </div>
            </Card>
        </Layout>
    );
}