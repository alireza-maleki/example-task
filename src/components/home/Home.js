import React, { useState, useEffect } from 'react';
import classes from "./Home.module.css";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import axios from 'axios';

const Home = () => {

    const [userOstan, setUserOstan] = useState();
    const [userShahr, setUserShahr] = useState();

    useEffect(() => {

        getOstan();
        getShahr();
    }, [])


    // === Ostan ===
    const getOstan = async () => {
        try {
            const { data } = await axios.get("https://rezayari.ir:8000/api/agency/getCity", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token-end')}`
                }
            });
            setUserOstan(data.data);
            console.log(data.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    // === Shahr ===
    const getShahr = async () => {
        try {
            const { data } = await axios.get("https://rezayari.ir:8000/api/agency/getProvince", {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            });
            setUserShahr(data.data);
            console.log(data.data);
        } catch (error) {
            console.log(error.message);
        }
    }


    const ostanChangeHandler = (id) => {
        console.log(id);
    }

    const shahrChangeHandler = (e) => {
        console.log(e.target.value);
    }


    return (
        <div className='w-full h-screen bg-indigo-600 pt-16'>
            <div className='bg-white rounded-lg w-1/2 mx-auto p-8 shadow-lg flex items-center justify-between'>

                <div>
                    <Autocomplete
                        disablePortal
                        options={userOstan?.map((item) => item.name)}
                        sx={{ width: 300 }}
                        renderInput={(data) => <TextField {...data} label="استان" />}
                        onChange={(e) => ostanChangeHandler(userShahr?.map((item) => item.id))}
                    />
                </div>

                <div>
                    <Autocomplete
                        disablePortal
                        options={userShahr?.map((item) => item.name)}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="شهر" />}
                        onChange={(e) => shahrChangeHandler(userShahr?.map((item) => item.id))}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home