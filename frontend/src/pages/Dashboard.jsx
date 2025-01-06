import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";

export default function Dashboard(){
    return(
        <div className="">
            <Appbar/>
            <div className="mx-8">
                <Balance value={"1234.00"}/>
                <Users/>
            </div>
        </div>
    )
}