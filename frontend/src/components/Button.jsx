export default function Button({label,onclick}){
    return(
        <button onClick={onclick} type="button" className="bg-gray-900 rounded-lg w-full py-2 px-4 text-white font-semibold hover:bg-gray-700">{label}</button>
    )
}