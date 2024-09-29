import { Balance } from "./balance";
import { Topbar } from "./topbar";
import { Users } from "./user";


export function Dashboard(){
    return(
        <div className="bg-slate-300 h-screen flex justify-center fixed left-0 right-0">
        <div className="  flex flex-col justify-center w-[80%]  ">
            <div className=" bg-white w-[80%]  p-2 h-max px-4 mx-5">
            <Topbar/>
            <Balance/>
            <Users/>
            </div>
        </div>
        </div>
    )

}