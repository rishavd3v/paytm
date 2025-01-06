export default function Avatar({src}){
    return(
        <div className="rounded-full bg-slate-200 h-8 w-8 flex items-center justify-center">
            <div>{src?src.toUpperCase():''}</div>
        </div>
    )
}
function BigAvatar({src}){
    return(
        <div className="rounded-full bg-slate-200 h-16 w-16 flex items-center justify-center">
            <div>{src?src.toUpperCase():''}</div>
        </div>
    )
}

export {Avatar,BigAvatar}