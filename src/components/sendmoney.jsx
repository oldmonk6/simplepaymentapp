import { useSearchParams } from "react-router-dom";

import { Heading } from "./heading";
import { Name } from "./name";
import axios from "axios"
import { useState } from "react";




export function Sendmoney(){
    const [searchparam]=useSearchParams();
    const id=searchparam.get("id")
    const name=searchparam.get("name")
    const [amount,setamount]=useState(0)
    
    return(
        <div className="bg-slate-300 h-screen flex justify-center fixed left-0 right-0">
        <div className="  flex flex-col justify-center w-[40%]  ">
            <div className="rounded-lg bg-white w-[80%]  p-2 h-max px-4 mx-5">
            <Heading label={"Send Money"}/>
            <Name label={name} />
            <div className="flex flex-col justify-around  gap-5">
               
        <p className="mx-8">Amount (in Rs)</p>
        <input type="text" placeholder="Enter amount" className="w-11/12 mx-6 py-3  border-2 border-solid border-gray-300 outline-none rounded-md" onChange={(e)=>{
            setamount(e.target.value)
            
        }} />
       
        <button onClick={async ()=>{
           await  axios.post("http://localhost:3000/api/v1/account/tranfer",{
            to:id,
            amount
           },{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
           })
        }} type="button" className=" w-11/12 text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 my-3 mx-5">send</button>
    </div>
               
                
           
            
           
            
            </div>
        </div>
        </div>
    )
}