import { Navigate,Outlet } from "react-router-dom";
import Authcontext from '../Context/AuthContext'
import { useContext } from "react";


const PrivateRouter=()=>{
    const {authHeader}=useContext(Authcontext)
    return(
        authHeader!==''?<Outlet/>:<Navigate to='/login'/>
    )
    
}

export default PrivateRouter