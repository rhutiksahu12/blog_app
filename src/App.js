import { Routes, Route } from "react-router-dom"
import { AuthContext } from "./Helpers/AuthContext";
import { DataContext } from "./Helpers/DataContext";
import { useState } from "react";

import Dashboard from "./Components/Dashboard";
import Login from './Components/Login';

const user = {
  email: "1234",
  password: "123"
}


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logIn, setLogIn] = useState(false)

  const [ data, setData ] = useState('')
  const [limit, setLimit] = useState(1)

  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword, user, logIn, setLogIn }}>
      <DataContext.Provider value={{data, setData, limit, setLimit}}>
        <div className="grid bg-gradient-to-br from-slate-900 to-teal-600 min-h-screen">
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
