import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import Inputbox from "./Inputbox";
import axios from "axios";
import User from "./User";

export default function Users(){
    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
            .then(response=>{
                setUsers(response.data.user);
            })
    }, [filter])
    

    return(
        <div className=""> 
            <div><Inputbox label={"Users"} placeholder={"Search users..."} onchange={(e) => {
                setFilter(e.target.value)
            }}/></div>
            <div>
                <div>
                    {users.map((user)=>{
                        return <User key={user.id} user={user}/>
                    })}
                </div>
            </div>
        </div>
    )
} 