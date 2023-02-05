

import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Helpers/AuthContext';
import { DataContext } from '../Helpers/DataContext';
import Card from './Card';

const Dashboard = () => {

    const navigate = useNavigate();

    const { logIn, setLogIn } = useContext(AuthContext)
    const { data, setData, pageNumber, setPageNumber } = useContext(DataContext)
    const [loading, setLoading] = useState(false)

    const handleInfiniteScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                console.log("scroll happened")
                setPageNumber((prevpageNumber) => prevpageNumber + 1);
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log(pageNumber, "pageNumber from dashboard")
    }, [pageNumber])

    useEffect(() => {
        const handleInfiniteScroll = (e) => {

            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPageNumber((prevpageNumber) => prevpageNumber + 1);
                console.log(pageNumber, "pageNumber")
            }
        }

        console.log(document.documentElement.scrollTop, document.documentElement.scrollHeight, "DOM")

        window.addEventListener('scroll', handleInfiniteScroll)
        return () => window.removeEventListener("scroll", handleInfiniteScroll)

    }, [])

    const logout = () => {
        navigate('/')
        setLogIn(false)
    }

    return (
        <>
            {
                logIn ?
                    <>
                        <nav className='w-full h-max bg-black/30 border border-black border-b-0'>
                            <ul>
                                <li className='text-lg float-right mx-6 p-1'> <button className='px-2 mb-1 bg-black/40 rounded-lg text-teal-300 hover:bg-teal-600' onClick={logout}>Logout</button></li>
                            </ul>
                        </nav>

                        <div className="grid grid-cols-3 gap-4">
                            {data && data.map((item, id) => {
                                return (<Card key={id} item={item} />)
                            })
                            }
                            <button onClick={() => setPageNumber(prev => prev + 1)}> scroll More{pageNumber}</button>
                        </div>
                    </>
                    :
                    <div>
                        <h1 className='flex text-5xl items-center justify-center'>
                            Please&nbsp;<Link to='/'>LogIn&nbsp;</Link>  to use
                        </h1>
                    </div>
            }

        </>
    )
}

export default Dashboard