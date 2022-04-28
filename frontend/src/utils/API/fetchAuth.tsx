import { useNavigate } from "react-router-dom";

import fetchApi from './fetchApi'
import {IUser} from '../../interface'

export default class fetchAuth extends fetchApi{


    async logOut(){
        await this.api.get( '/auth/logout' )
        localStorage.isAuthenticate = false
    }
    
    async logIn( data:IUser ){
        await this.api.post( '/auth/login', data )
        localStorage.setItem('isAuthenticate', JSON.stringify(true))
    }

    async register( data:IUser ){
       await this.api.post('/auth/register', data)
    }

}
