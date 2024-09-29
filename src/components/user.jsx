import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios"

export function Users(){
    const [users,setusers]=useState([]);
    const [filter,setfilter]=useState("");
    useEffect( ()=>{
         axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter).then((response)=>{
            setusers(response.data.user)

         })
        
        
    },[filter])

    return <div className="flex flex-col gap-2 ">
        <p className="font-bold text-xl my-3">Users</p>
        <div>
            <input type="text" placeholder="enter the username" onChange={(e)=>{
                setfilter(e.target.value)
            }} className="min-w-[80%] outline-none border-2 border-solid border-gray-300" />
        </div>
        <div>
            {users.map(user=><User key={user._id} user={user}/>)}
        </div>
    </div>
}
  function User({key,user}){
    console.log(user)
    const navigate=useNavigate();
    return <div className="flex justify-between my-2">
        <div className="flex  justify-start items-center gap-1">
            <div className="flex flexx-col justify-center items-center capitalize font-bold rounded-full h-12 w-12 bg-slate-200 mt-1 mr-2 "><p>{user.firstName[0]}</p></div>
            <p>{user.firstName} {user.lastName}</p>
        </div>
        <div className="w-[20%] flex justify-center ">
            <button onClick={()=>{
                navigate("/sendmoney?id="+ user._id +"&name=" +user.firstName )
            }
                
            } className="bg-black text-white rounded w-[80%]">Send money</button>
        </div>
    </div>
}