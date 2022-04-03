import { useState } from 'react'

import './login.css';

import { IUser } from '../../interface';
import fetchAuth from '../../utils/API/fetchAuth';


const AuthApi = new fetchAuth()

export default function Login() {

  const [loginValue, setLoginValue] = useState<IUser>({
    firstName:'',
    email:'',
    password:''
  })
  
  const handleChange =(e:any)=>{
    let value = e.target.value
    
    setLoginValue({
      ...loginValue,
      [e.target.name]:value
    })

  }

  const handleSubmit = async (e:any) =>{
    e.preventDefault();

    try {
      await AuthApi.logIn( loginValue )
      localStorage.setItem('isAuthenticate', JSON.stringify(true))
      window.location.href = '/'

    } catch (error) {
      console.log(error)
    } 

  }
  return<div>
      <div className='background'>
        <div className='shape'></div>
        <div className='shape'></div>
      </div>
      <form className='form_login' onSubmit={handleSubmit}>
          <h3>Login</h3>
          <label className='label_login' htmlFor="email">E-mail</label>
          <input className='input_login' onChange={handleChange} type='email' name='email' placeholder='xxxxx@gmail.com'  required />

          <label className='label_login' htmlFor="password">password</label>
          <input className='input_login' onChange={handleChange} type="password" name="password" placeholder='******'  id="password" required/>

          <button type="submit" className='button-loging'>Log In</button>
      </form>
  </div>
}
