import { Link } from "react-router-dom";

export default function ButtonWarning({label,buttonText,to}){
    return(
        <div className="text-sm py-2">
            <button>{label}</button>
            <Link to={to} className="font-semibold underline cursor-pointer pl-1">{buttonText}</Link>
        </div>
    )
}