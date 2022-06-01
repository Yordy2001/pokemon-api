import { Navigate } from 'react-router-dom'

export default function PrivateRouter({ children }: any) {

    const user: any = localStorage.getItem('poke-session')
    const isAuth = JSON.parse(user)
    if (!isAuth) {
        return <Navigate to="/login"></Navigate>
    }

    return children
}
