import { useSearchParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import axios from "axios";
import { useState } from "react";

export default function SendMoney(){
    const [amount,setAmount] = useState("");
    const [searhParams] = useSearchParams();
    const id = searhParams.get("id"); 
    const name = searhParams.get("name"); 
    return(
        <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg w-80 text-center py-8 px-6 h-max shadow-md">
                <Heading label={"Send Money"}/>

                <div className="flex items-center gap-2 mt-10 font-semibold">
                    <Avatar src={name[0]}/>
                    <div className="">{name}</div>
                </div>

                
                    {/* <label className="font-semibold text-sm text-left">Amount (in Rs)</label> */}
                    <Inputbox label={"Amount (in Rs)"} placeholder={"Enter amount"} type={"number"} onchange={(e)=>setAmount(e.target.value)}/>

                <button type="button" className="bg-green-500 px-4 py-2 rounded-md w-full mt-2 font-semibold text-white" onClick={()=>{
                    axios.post("http://localhost:3000/api/v1/account/transfer",{
                        amount,
                        to: id
                    },{
                        headers:{
                            Authorization: "Bearer "+localStorage.getItem("token")
                        }
                    })
                }}>Transfer</button>
            </div>
        </div>
    )
}