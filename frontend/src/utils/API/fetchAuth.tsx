import fetchApi from './fetchApi'
import {IUser} from '../../interface'

export default class fetchAuth extends fetchApi{

    async logOut(){
        await this.api.get( '/auth/logout' )
    }
    
    async logIn( data:IUser ){
        await this.api.post( '/auth/login', data )}

    async authRegister( data:IUser ){
       await this.api.post('/auth/register', data)
    }

}
