import React, {useState, useEffect} from 'react';
import {Form, Input, Checkbox, Divider, Button, Layout, Card, Image} from 'antd';
 

export default RegisterContainer() = () => {
    const [form] = Form.useForm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const validate_Email = (email) => {
        return email !== ""
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

                >   {
                    validate_Email(email)? 
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
                        <span>
                            <a className="register-form-terms" href="">
                                Terms of Service
                            </a>
                            and
                            <a className="register-form-policies" href="">
                                Privacy Policy
                            </a>
                            .
                        </span>                        
                    </Form.Item>
                </Form>

                <Divider />
                <div className="register-field">
                    <span>
                        Already sign up?
                        <a className="Signup" href="">
                            Go to login
                        </a>
                    </span>
                </div>
            </Card>
        </Layout>
    );
}