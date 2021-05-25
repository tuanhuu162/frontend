import React, {useState, useEffect} from 'react';
import {Typography, Form, Input, Checkbox, Divider, Button, Layout, Card, Image} from 'antd';

const { Text, Link } = Typography;

export default (props) => {
    const [form] = Form.useForm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);

    const onEmailChange = (event) => {
        setEmail(event.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.value);
    }

    const onSubmit = (event) => {

    }

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
                    <Form.Item label="Email" rules={[
                        {required: true, message: 'Please input your email!!!'},
                        {pattern: /[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}/igm, message: "Email format not correct!!!!!!!"}
                        ]}>
                        <Input placeholder="input placeholder"/>
                    </Form.Item>

                    <Form.Item label="Password" rules={[
                        {required: true, message: 'Please input your password!!!'},
                        {pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/g, max: 16, min: 8, 
                        message: "Password must have length from 8-16 characters and contain at least one Uppercase, one Lowercase, one number and one special character"},
                        ]}>
                        <Input type="password" placeholder="Password"/>
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" disabled={disabled}>
                            Log in
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>
                                Remember me
                            </Checkbox>
                        </Form.Item>

                        <Link className="login-form-forgot" href="">
                            Forgot passowrd?
                        </Link>
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