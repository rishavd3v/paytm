import axios from "axios"
import { useEffect, useState } from "react"

export default function Balance({value}){
    const [balance,setBalance] = useState("");
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization: "Bearer "+ localStorage.getItem("token")
            }
        })
        .then(response=>{
            setBalance(parseFloat(response.data.balance).toFixed(2));
        })

    },[])

    return (
        <div className="font-semibold py-4">
            Your balance - {balance}
        </div>
    )
}