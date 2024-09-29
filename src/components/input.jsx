export function Input({label,placeholder,onchange}){
    return <div className="flex flex-col  gap-1 relative left-9">
        <label htmlFor="Password" className="font-semibold mt-4">{label}</label>
        <input type="text" placeholder={placeholder} onChange={onchange} className="border-2 border-solid border-gray-300 rounded-md w-[70%] p-2"/>
    </div>
}
