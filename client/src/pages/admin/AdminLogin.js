import { message } from 'antd'
import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/rootSlice'

const AdminLogin = () => {
    const [user, setUser] = React.useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch()
    const login = async () =>{
        try {
            dispatch(ShowLoading())
            const response = await axios.post('/api/portfolio/admin-login', user);
            dispatch(HideLoading())
            if (response.data.success) {
                message.success(response.data.message);
                localStorage.setItem("token", JSON.stringify(response.data));
                window.location.href= "/admin"
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            message.error(error.message)
            dispatch(HideLoading())
        }
    }
    

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col'>
                <h1 className='text-2xl'>login</h1>
                <hr/>
                <input type="text" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} placeholder="login"/>
                <input type="text" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password"/>
                <button className='bg-primary text-white p-2 ' onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default AdminLogin