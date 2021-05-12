import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.less';
import Configs from 'components/ConfigsContext';

export default (props) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPass ] = useState("");
    const [emailMessenge, setEmailMessenger] = useState("");
    const [passwordMessenge, setPasswordMessenge] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [loginMessenge, setLoginMessenge] = useState("");


    useEffect(() => {
        if (emailMessenge.trim() === "" && passwordMessenge.trim() === "") {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [emailMessenge, passwordMessenge])

    useEffect(() => {
        if (email.trim() !== "" || password.trim() !== "") {
            setLoginMessenge("")
        }
    }, [email, password])

    



    return () => {

    }
}