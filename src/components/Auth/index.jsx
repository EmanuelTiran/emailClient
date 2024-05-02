import React, { useEffect,useState } from 'react'
import { Outlet } from "react-router-dom";
import style from './style.module.css';
import Login from '../Login Page';
import NavMain from '../NavMain/index';
import DataContext from '../../useContext/context';
import axios from 'axios';


export default function Auth() {
    const [user, setUser] = useState(false);
    const checkUser = () => {
        axios.get(`http://localhost:5050/user/`, { headers: { authorization: 'Bearer ' + localStorage.token } })
            .then(response => {
                console.log("fetch of <Login />", response.data);
                setUser(response.data)
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }
    useEffect(() => {
        if (localStorage.token) {
            checkUser()
        }
    }, [localStorage.token])

    if (user) {
        return (
            <div className={style.main}>
                <DataContext.Provider value={{ user, setUser }}>
                    {/* <NavMain/> */}
                    <Outlet />
                </DataContext.Provider>
            </div>
        );
    } else {

        return (
            <Login setUser={setUser} />
        );
    }
}