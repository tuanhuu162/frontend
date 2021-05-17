import React, {useState, useEffect} from 'react';
import {Divider, Layout, Card, Image} from 'antd';
 

export default LoginView = (props) => {
    return (
        <Layout>
            <Card class="login-box">
                <Image src="./assets/logo.svg"/>
                <h1>{props.title}</h1>

                <Divider />
                {props.children}
            </Card>
        </Layout>
    );
}