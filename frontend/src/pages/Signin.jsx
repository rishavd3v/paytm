import { useState } from "react";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    return(
        <div className="bg-slate-500 h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg w-80 text-center p-2 px-4 h-max">
                <Heading label={"Sign In"}/>
                <Subheading label={"Enter your information to sign in"}/>
                <Inputbox label={"Username"} placeholder={"jhondoe@gmail.com"} onchange={e=>{
                    setUsername(e.target.value);
                }}/>
                <Inputbox label={"Password"} placeholder={"123456"} onchange={e=>{
                    setPassword(e.target.value);
                }}/>
                <div className="pt-4">
                    <Button label={"Sign In"} onclick={async()=>{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                            username,
                            password
                        })
                        
                        localStorage.setItem('token',response.data.token)
                        navigate("/dashboard");
                    }}/>
                </div>
                <div>
                    <ButtonWarning label={"Don't have an account?"} buttonText={"Signup"} to={'/signup'}/>
                </div>
            </div>
        </div>
    )
}