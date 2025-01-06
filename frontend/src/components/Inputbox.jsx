export default function Inputbox({label,placeholder, onchange,type}){

    return(
        
        <div>
            <div className="text-sm font-medium text-left py-2">
                {label}
            </div>
            <input onChange={onchange} placeholder={placeholder} className="w-full px-2 py-1 rounded-md border" type={type}/>
        </div>
    )
}