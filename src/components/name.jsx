export function Name({label}){
   return <div className="flex justify-evenly items-center gap-3  w-[50%] mx-3 ">
    
   <div className=" w-[26%]  flex justify-center items-center   py-4"><p className="text-2xl font-bold bg-gray-300 rounded-full w-[100%] h-max flex justify-center py-4">{label[0]}</p></div>
   <p className="text-2xl font-bold   ">{label}</p>
</div>
    
    

}