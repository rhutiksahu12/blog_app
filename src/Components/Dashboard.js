import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Helpers/AuthContext';
import { DataContext } from '../Helpers/DataContext';




const Dashboard = () => {

    const navigate = useNavigate();

    const { logIn, setLogIn } = useContext(AuthContext)
    const { data, setData } = useContext(DataContext)

    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes').then((res) => {
            console.log(res)
        })
    }, [])

    const logout = () => {
        navigate('/')
        setLogIn(false)
    }

    return (
        <>
            {logIn ? <>
                <nav className='w-full h-max bg-black/30 border border-black border-b-0'>
                    <ul>
                        <li className='text-lg float-right mx-6 p-1'> <button className='px-2 mb-1 bg-black/40 rounded-lg text-teal-300 hover:bg-teal-600' onClick={logout}>Logout</button></li>
                    </ul>
                </nav>

                <div>
                    
                </div>


            </>
                :
                <div>
                    <h1 className='flex text-5xl items-center justify-center'>
                        Please&nbsp;<Link to='/'>LogIn&nbsp;</Link>  to use
                    </h1>
                </div>}
        </>
    )
}

export default Dashboard