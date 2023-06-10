import React, { useState, useEffect } from 'react';

import classes from "./Login.module.css";

import axios from "axios";

import { Redirect } from "react-router-dom";
import { useNavigate } from 'react-router';


import { TextField, Button } from "@mui/material";
import Alert from '@mui/material/Alert';

const Login = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState();
    const [userPassword, setUserPassword] = useState();

    const [showError, setShowError] = useState(false);


    const userNameHandler = (e) => {
        setUserName(e.target.value);
    }

    const userPasswordHandler = (e) => {
        setUserPassword(e.target.value);
    }


    const submitFormHandler = async (e) => {
        e.preventDefault();

        if (!userName && !userPassword) {
            setShowError(true);
        } else {
            setShowError(false)
        }

        userName.toString();
        userPassword.toString();

        const { data } = await axios.post("https://rezayari.ir:8000/api/auth/login", {
            "username": userName,
            "password": userPassword
        })

        setUserName();
        setUserPassword();

        console.log(data.accessToken);
        sessionStorage.setItem('token-end', data.accessToken);

        navigate('/home');


    }


    return (
        <div className='relative flex items-center justify-center w-full h-screen bg-gray-400'>

            <div className='p-8 bg-white shadow-md rounded-lg'>

                <div className='mb-4'>
                    <TextField value={userName} onChange={(e) => userNameHandler(e)} id="outlined-basic" label="نام کاربری" variant="outlined" />
                </div>
                <div>
                    <TextField value={userPassword} onChange={(e) => userPasswordHandler(e)} id="outlined-basic" label="رمز ورود" variant="outlined" />
                </div>

                <div className='w-full flex items justify-center mt-6'>
                    <Button onClick={submitFormHandler} variant="contained">ورود</Button>
                </div>

            </div>

            <div className="absolute bottom-4 left-4">
                {
                    showError && (
                        <Alert severity="error">اطلاعات وارد شده اشتباه است .</Alert>
                    )
                }
            </div>

        </div>
    )
}

export default Login