import React, {useState, useEffect} from 'react';
import {Form, Card} from 'antd';

export default RegisterView = () => {
    const [form] = Form.useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const validate_Email = (email) => {
        return email !== ""
    }

    return (
        <Card>
            <Form.Item>
                
            </Form.Item>    
        </Card>
    )
}