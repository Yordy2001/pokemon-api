import { Navigate } from 'react-router-dom'

export default function PrivateRouter({children, isAuth}:any) {
   
   if(!isAuth){
    return <Navigate to="/login"></Navigate>
   }

    return children
}
