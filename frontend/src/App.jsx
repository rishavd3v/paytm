import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import axios from 'axios'
import Profile from './pages/Profile'
import { useEffect, useState } from 'react'

function App() {
  const navigate = useNavigate();
  const [user,setUser] = useState();
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/user/me",{
        headers:{
            Authorization:"Bearer " + localStorage.getItem("token")
        }
    })
    .then(response=>{
      if(response.data.user){
        setUser(response.data.user);
        navigate("/dashboard");
      }
    })
    .catch((err) => {
      console.log("Error fetching user data " + err);
      navigate("/signin");
    });
    
  },[])

  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard user={user}/>} />
        <Route path="/send" element={<SendMoney/>} />
        <Route path="/profile" element={<Profile user={user}/>} />
      </Routes>
    </>
  )
}

export default function AppWrapper(){
  return(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}