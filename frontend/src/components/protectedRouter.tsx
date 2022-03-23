import React from 'react'
import { Navigate } from 'react-router-dom'


export default function PrivateRouter({children, isAuth}:any) {
   
    console.log(isAuth)
    let auth = isAuth
    return auth ? children : <Navigate to='/login' replace />

}
