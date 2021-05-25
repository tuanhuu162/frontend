import React, {useState, useEffect} from 'react';
import {Typography, Form, Input, Divider, Button, Layout, Card, Image} from 'antd';

const { Text, Link } = Typography;


export default (props) => {
    const [form] = Form.useForm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [submitEmail, setSubmitEmail] = useState(False)


    const onSubmitEmail = (event) => {
        setSubmitEmail(event.value !== "");
    }

    return (
        <Layout>
            <Card class="register-box">
                <Image src="./assets/logo.svg"/>
                <h1>Sign up</h1>
                <Form
                    form={form}
                    layout="vertical"
                    classname="register-form"
                    onFinish={onSubmitEmail} 
                >   {
                    submitEmail? 
                    <div>
                        <Form.Item label="Email" rules={[{required: true, message: 'Please input your email!!!'}]}>
                            <Input placeholder="input placeholder"/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Sign up with email
                            </Button>
                        </Form.Item>
                    </div>
                    : <div>
                        <Form.Item label="Name" rules={[{required: true, message: 'Please input your name!!!'}]}>
                        <Input placeholder="input placeholder"/>
                        </Form.Item>

                        <Form.Item label="Password" rules={[{required: true, message: 'Please input your password!!!'}]}>
                            <Input type="password" placeholder="Password"/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Sign up now
                            </Button>
                        </Form.Item>
                    </div>
                    }
                    
                    <Form.Item>
                        <Text>
                            <Link className="register-form-terms" href="">
                                Terms of Service
                            </Link>
                            and
                            <Link className="register-form-policies" href="">
                                Privacy Policy
                            </Link>
                            .
                        </Text>                        
                    </Form.Item>
                </Form>

                <Divider />
                <div className="register-field">
                    <Text>
                        Already sign up?
                        <Link className="Signup" href="">
                            Go to login
                        </Link>
                    </Text>
                </div>
            </Card>
        </Layout>
    );
}