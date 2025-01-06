import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Appbar(){
    const [user,setUser] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/me",{
            headers:{
                Authorization:"Bearer " + localStorage.getItem("token")
            }
        })
        .then(res=>{
            setUser(res.data.user);
        })
    },[])
    return(
        <div className="flex justify-between items-center px-4 py-2 font-semibold h-max rounded-lg shadow-md">
            <h2>Paytm App</h2>
            <div className="flex gap-2 items-center">
                <div>
                    {user?user.firstName:''}
                </div>
                <button onClick={()=>navigate('/profile')}><Avatar src={user? user.firstName[0]:''}/></button>
            </div>
        </div>
    )
}