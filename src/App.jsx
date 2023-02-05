
import { Routes, Route } from "react-router-dom"
import { AuthContext } from "./Helpers/AuthContext";
import { DataContext } from "./Helpers/DataContext";
import { useState, useEffect } from "react";
import axios from 'axios';

import Dashboard from "./Components/Dashboard";
import Login from './Components/Login';

const user = {
  email: "1234",
  password: "123"
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogIn] = useState(true)
  // const [logIn, setLogIn] = useState(false)

  // const [ data, setData ] = useState('')
  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=20`);
      const photos = response.data
      setData((prevPhotos) => [...prevPhotos, ...photos]);
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    console.log(pageNumber, "pageNumber from login")
    fetchPhotos()
  }, [pageNumber])

  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, user, logIn, setLogIn }}>
      <DataContext.Provider value={{ data, setData, pageNumber, setPageNumber }}>
        <div className="grid bg-gradient-to-br from-white to-teal-800 min-h-screen">
          <Routes>
            {/* <h1 className="text-3xl text-white font-bold underline">
          Hello world!
          </h1> */}
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </div>
      </DataContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
