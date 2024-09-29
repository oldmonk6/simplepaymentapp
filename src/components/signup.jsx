import { useState } from "react";
import { Button } from "./button";

import { Heading } from "./heading";
import { Input } from "./input";
import { Lowheading } from "./lowheading";

import { Subheading } from "./subheading";
import axios from "axios"
import { useNavigate } from "react-router-dom";


export function Signup(){
    const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState("");
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    return(
        <div className="bg-slate-300 h-screen flex justify-center fixed left-0 right-0">
        <div className="  flex flex-col justify-center w-[40%]  ">
            <div className="rounded-lg bg-white w-[80%]  p-2 h-max px-4 mx-5">
            <Heading label={"Sign up"} />
            <Subheading label={"Enter your information to create an accounnt"}/>
            <Input label={"First Name"} placeholder={"enter the first name"} onchange={(e)=>{
                setfirstname(e.target.value);
            }}/>
            <Input label={"Last Name"} placeholder={"enter the last name"} onchange={(e)=>{
                setlastname(e.target.value);
            }}/>
            <Input label={"Email"} placeholder={"enter the email"} onchange={(e)=>{
                setusername(e.target.value);
            }}/>
           
            <Input label={"password"} placeholder={"enter the password"} onchange={(e)=>{
                setpassword(e.target.value);
            }}/>
            <Button label={"Sign up"} onClick={async ()=>{
               const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
                    username,
                    password,
                    firstname,
                    lastname
                })
                localStorage.setItem("token",response.data.token);
                navigate("/dashboard")
            }}/>
            <Lowheading label={"Already have an account ?"} buttontext={"Sign in"} to={"/signin"}/>
            </div>
        </div>
        </div>
    )
}