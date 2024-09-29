export function Email({label}){
    return <div className="flex flex-col  gap-1 ">
        <label htmlFor="email" className="font-semibold mt-4">Email:</label>
        <input type="text" placeholder="Enter the email" className="border-2 border-solid border-gray-300 rounded-md max-w-sm p-2"/>
    </div>

}