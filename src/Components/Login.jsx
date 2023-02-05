
import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Helpers/AuthContext';
import { DataContext } from '../Helpers/DataContext';
import Card from './Card';

const Login = () => {
    const { setLogIn, user, email, password, setEmail, setPassword } = useContext(AuthContext)
    const { data, setData, pageNumber, setPageNumber } = useContext(DataContext)

    const navigate = useNavigate();

    const [error, setError] = useState(false)


    const handleSubmit = async () => {
        // console.log(email, password)
        if (user.email === email && user.password === password) {
            setLogIn(true)
            navigate("/dashboard")
            // console.log("hello")
        } else {
            setError(true)
        }
    }


    return (
        <>
            {/* <Card /> */}
            <div className=' place-self-center justify-items-center rounded-lg bg-inherit h-2/3  w-2/3 lg:w-1/3'>

                <div className='flex flex-col h-full gap-y-4 items-center justify-center'>
                    <div className='w-2/3'>
                        <label className='mb-1 block font-medium text-teal-800'>Email</label>
                        <input type="email" className='w-full bg-gray-200 border border-gray-300 text-sm rounded-md h-9 p-2' placeholder='Email'
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setError(false)
                            }}
                            required />
                    </div>
                    <div className='w-2/3'>
                        <label className=' mb-1 block font-medium text-teal-800'>Password</label>
                        <input type="password" className='w-full bg-gray-200 border border-gray-300 text-sm rounded-md h-9 p-2' placeholder='Password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setError(false)
                            }}
                            required />

                    </div>
                    {/* <button>Submit</button> */}
                    {error ? <p className='text-red-600 text-sm'>Invalid Email or Password</p> : null}


                    <button type='Submit' className='w-24 bg-teal-600 hover:bg-teal-800 text-center border border-teal-500 rounded-lg' onClick={handleSubmit}>Submit</button>

                </div>

            </div>


        </>
    )
}

export default Login