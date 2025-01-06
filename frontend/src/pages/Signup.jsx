import { useState } from "react";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import Subheading from "../components/Subheading";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSignup(){
        const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
            firstName,
            lastName,
            username,
            password
        })
        localStorage.setItem('token', response.data.token);
        navigate("/dashboard");
    }
    return(
        <div className="bg-slate-500 h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg w-80 text-center p-2 px-4 h-max">
                <Heading label={"Signup"}/>
                <Subheading label={"Enter your information to create an account"}/>
                <Inputbox label={"First Name"} placeholder={"Jhon"} onchange={e=>{
                    setFirstName(e.target.value);
                }}/>
                <Inputbox label={"Last Name"} placeholder={"Doe"} onchange={e=>{
                    setLastName(e.target.value);
                }}/>
                <Inputbox label={"Username"} placeholder={"jhon@gmail.com"} onchange={e=>{
                    setUsername(e.target.value);
                }}/>
                <Inputbox label={"Password"} placeholder={"123456"} onchange={e=>{
                    setPassword(e.target.value);
                }}/>
                <div className="pt-4">
                    <Button label={"Signup"} onclick={handleSignup}/>
                </div>
                <div>
                    <ButtonWarning label={"Already have an account?"} buttonText={"Sign in"} to={'/signin'}/>
                </div>
            </div>
        </div>
    )
}