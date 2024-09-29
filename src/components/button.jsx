export function Button({label, onClick}) {
    return <div className=""> <button onClick={onClick} type="button" class=" w-11/12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 my-3 mx-5">{label}</button></div>
}