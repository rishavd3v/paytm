import axios from "axios";
import Avatar, { BigAvatar } from "../components/Avatar";
import { useNavigate } from "react-router-dom";

export default function Profile({user}){
    const navigate = useNavigate();
    return(
        <div className="flex justify-center items-center bg-slate-200 h-screen">
            <div className="bg-white rounded-md h-max flex flex-col justify-center items-center p-20 font-semibold gap-2">
                <BigAvatar src={user?user.firstName[0]:''}/>
                <div className="text-center">
                    <div>{user?`${user.firstName} ${user.lastName}`:''}</div>
                    <div>{user?user.username:''}</div>
                </div>

                <button className="bg-red-500 px-4 py-2 rounded-md w-full mt-2 font-semibold text-white"  onClick={()=>{localStorage.removeItem('token'),navigate('/signin')}}>Logout</button>
            </div>
        </div>
    )
}