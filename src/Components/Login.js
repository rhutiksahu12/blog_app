// import axios from 'axios';
// import React, { useContext, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../Helpers/AuthContext';
// import { DataContext } from '../Helpers/DataContext';
// import Card from './Card';

// const Login = () => {
//     const { setLogIn, user, email, password, setEmail, setPassword } = useContext(AuthContext)
//     const { data, setData, limit, setLimit } = useContext(DataContext)

//     const navigate = useNavigate();

//     const [error, setError] = useState(false)


//     const handleSubmit = async () => {
//         // console.log(email, password)
//         if (user.email === email && user.password === password) {
//             setLogIn(true)
//             navigate("/dashboard")
//             // console.log("hello")
//         } else {
//             setError(true)
//         }
//     }

//     const fetchPhotos = async () => {
//         try {
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${limit}&_limit=50`);
//             const photos = response.data
//             setData(photos);
//             console.log(data)
//         } catch (err) {
//             console.log(err)
//         }
//     }

//     useEffect(() => {
//         console.log(limit,"limit")
//         fetchPhotos()
//     }, [limit])


//     // const handleInfiniteScroll = async () => {
//     //     try {
//     //         if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
//     //             setpage((prev) => prev + 1)
//     //             console.log(page)
//     //         }
//     //     } catch (err) {
//     //         console.log(err)
//     //     }
//     // }

//     // useEffect(() => {
//     //     window.addEventListener('scroll', handleInfiniteScroll)
//     //     return () => window.removeEventListener("scroll", handleInfiniteScroll)
//     // }, [])




//     return (
//         <>
//             {/* <Card /> */}
//             <div className=' place-self-center justify-items-center rounded-lg bg-gradient-to-br from-inherit to-transparent h-2/3  w-2/3 lg:w-1/3'>

//                 <div className='flex flex-col h-full gap-y-4 items-center justify-center'>
//                     <div className='w-2/3'>
//                         <label className='mb-1 block font-medium text-teal-400'>Email</label>
//                         <input type="email" className='w-full bg-gray-500 border border-gray-300 text-sm rounded-md h-9 p-2' placeholder='Email'
//                             onChange={(e) => {
//                                 setEmail(e.target.value)
//                                 setError(false)
//                             }}
//                             required />
//                     </div>
//                     <div className='w-2/3'>
//                         <label className=' mb-1 block font-medium text-teal-400'>Password</label>
//                         <input type="password" className='w-full bg-gray-500 border border-gray-300 text-sm rounded-md h-9 p-2' placeholder='Password'
//                             onChange={(e) => {
//                                 setPassword(e.target.value)
//                                 setError(false)
//                             }}
//                             required />

//                     </div>
//                     {/* <button>Submit</button> */}
//                     {error ? <p className='text-red-600 text-sm'>Invalid Email or Password</p> : null}


//                     <button type='Submit' className='w-24 bg-teal-400 hover:bg-teal-300 text-center border border-teal-500 rounded-lg' onClick={handleSubmit}>Submit</button>

//                 </div>

//             </div>


//         </>
//     )
// }

// export default Login





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
            <div className=' place-self-center justify-items-center rounded-lg bg-gradient-to-br from-inherit to-transparent h-2/3  w-2/3 lg:w-1/3'>

                <div className='flex flex-col h-full gap-y-4 items-center justify-center'>
                    <div className='w-2/3'>
                        <label className='mb-1 block font-medium text-teal-400'>Email</label>
                        <input type="email" className='w-full bg-gray-500 border border-gray-300 text-sm rounded-md h-9 p-2' placeholder='Email'
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setError(false)
                            }}
                            required />
                    </div>
                    <div className='w-2/3'>
                        <label className=' mb-1 block font-medium text-teal-400'>Password</label>
                        <input type="password" className='w-full bg-gray-500 border border-gray-300 text-sm rounded-md h-9 p-2' placeholder='Password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setError(false)
                            }}
                            required />

                    </div>
                    {/* <button>Submit</button> */}
                    {error ? <p className='text-red-600 text-sm'>Invalid Email or Password</p> : null}


                    <button type='Submit' className='w-24 bg-teal-400 hover:bg-teal-300 text-center border border-teal-500 rounded-lg' onClick={handleSubmit}>Submit</button>

                </div>

            </div>


        </>
    )
}

export default Login