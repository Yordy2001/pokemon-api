import React, { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../interface';
import fetchAuth from '../../utils/API/fetchAuth';

import '../../assets/style/main.css'
import './login.css';


const AuthApi = new fetchAuth()

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<IUser>();
  let navigate = useNavigate()

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();

    try {
      let user = await AuthApi.logIn(data)
      console.log(user)
      localStorage.setItem('poke-session', JSON.stringify({isAuthenticate:true}))
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  
  return <div className='login_body'>
    <div className='background'>
      <div className='shape'></div>
      <div className='shape'></div>
    </div>
    <form className='form_login' onSubmit={handleSubmit(onSubmit)}>
      <label
        className='label_login'
        htmlFor="email">
        E-mail
      </label>
      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className='input_login'
        type="text" placeholder="Email"
      />
      <label
        className='label_login'
        htmlFor="password">
        Password
      </label>

      <input
        {...register("password", { required: true, maxLength: 80 })}
        className='input_login'
        type="password"
        placeholder="*******"
      />

      <button type="submit" className='button-loging'>Log In</button>
      <button 
      type="submit" 
      className='button-loging register'
      onClick={()=>{
        navigate('/register')
      }}
      >
        Register
      </button>
    </form>
  </div>
}
