import {useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import Button from "./Button";

export default function User({user}){
    const navigate = useNavigate();
    return(
        <div className="flex justify-between items-center gap-2 w-full py-2">
            <div className="flex gap-2 items-center font-semibold">
                <Avatar src={user.firstName[0].toUpperCase()}/>
                {user.firstName + " "+ user.lastName}
            </div>
            <div>
                <Button label={"Send Money"} onclick={()=>{
                    navigate(`/send?id=${user.id}&name=${user.firstName} ${user.lastName}`);
                }}/>
            </div>
        </div>
    )
}