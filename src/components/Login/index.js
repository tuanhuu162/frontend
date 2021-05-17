import React, {useState, useEffect} from 'react';
import {Form, Input, Checkbox, Divider, Button, Layout, Card, Image} from 'antd';
 

export default LoginView() = () => {
    const [form] = Form.useForm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Layout>
            <Card class="login-box">
                <Image src="./assets/logo.svg"/>
                <h1>Login</h1>
                <Form
                    form={form}
                    layout="vertical"
                    classname="login-form"

                >
                    <Form.Item label="Email" rules={[{required: true, message: 'Please input your email!!!'}]}>
                        <Input placeholder="input placeholder"/>
                    </Form.Item>

                    <Form.Item label="Password" required>
                        <Input type="password" placeholder="Password"/>
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>
                                Remember me
                            </Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot passowrd?
                        </a>
                    </Form.Item>
                </Form>

                <Divider />
                <div className="register-field">
                    <span>
                        Don't have a account? 
                        <a className="Signup" href="">
                            Sign up
                        </a>
                    </span>
                </div>
            </Card>
        </Layout>
    );
}