import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Helpers/AuthContext';
import { DataContext } from '../Helpers/DataContext';
import Card from './Card';





const Dashboard = () => {

    const navigate = useNavigate();

    const { logIn, setLogIn } = useContext(AuthContext)
    const { data, setData, limit, setLimit } = useContext(DataContext)
    const [loading, setLoading] = useState(false)


    // const fetchPhotos = async () => {
    //     try {

    //         const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    //         const photos = response.data
    //         if (photos) {
    //             setData(photos);
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }

    // }

    // console.log(data)

    // useEffect(() => {
    //     fetchPhotos()
    // }, [logIn])

    const handleInfiniteScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setLimit((prevLimit) => prevLimit + 1);
                console.log(limit, "limit")
            }
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {

        const handleInfiniteScroll = (e) => {

            if (window.innerHeight + e.target.document.documentElement.scrollTop + 1 >= e.target.document.documentElement.scrollHeight) {
                setLimit((prevLimit) => prevLimit + 1);
                console.log(limit, "limit")
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
                            {data?.map((item, id) => {
                                return (<Card item={item} />)
                            })
                            }
                            <button onClick={() => setLimit(prev => prev + 1)}> scroll More{limit}</button>
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