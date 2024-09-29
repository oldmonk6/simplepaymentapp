import axios from "axios";

import { useEffect, useState } from "react"

export function Balance(){
    const [amount,setamount]=useState("");
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        }).then((response)=>{
            setamount(response.data.Balance)
        })
    },[])
    
   
    return <div className="flex justify-start gap-3 ml-3 my-6 ">
        <p className="text-xl font-bold">Your balance</p>
        <p className="text-xl font-bold">Rs {amount}</p>
    </div>

}