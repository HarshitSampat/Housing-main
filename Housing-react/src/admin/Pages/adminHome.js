import React, { useEffect } from 'react'
// import UserService from '../../Services/UserServices'
import { useHistory } from 'react-router'
import AdminNavBar from '../Components/AdminNavbar'
import MovingController from '../Components/MovingController'

function AdminHome()
{
    const history = useHistory()
    useEffect(() => {
        try {
            const userInfo = localStorage.getItem('userInfo')
            const userData = JSON.parse(userInfo)
            console.log(userData);
            console.log(userData.isAdmin)
            if (userData.isAdmin === false) {
                history.push('/login')
            }
        } catch (err){console.log(err); }
 }, [history])


    return (
        <>
        <div>
                <AdminNavBar></AdminNavBar>
                <div>
                   <MovingController/>
                </div>
            </div>
        </>
    )
}

export default AdminHome

