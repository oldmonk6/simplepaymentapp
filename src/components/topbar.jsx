export function Topbar(){
    return <div className="min-w-full flex justify-between  items-center border-2 borde-solid border-white shadow-md">
        <p className="font-bold text-xl">Payment App</p>
        <div className="flex justify-evenly items-center   w-[20%] ">
            <p className="text-lg   ">Hello ,User</p>
           <div className=" w-[30%]  flex justify-center items-center   py-4"><p className="text-2xl font-bold bg-gray-300 rounded-full w-[100%] h-max flex justify-center py-4">U</p></div>
        </div>
    </div>
}