import { useState } from 'react'

import '../../assets/style/main.css'
import './login.css';

import { IUser } from '../../interface';
import fetchAuth from '../../utils/API/fetchAuth';
import { useForm } from 'react-hook-form';


const AuthApi = new fetchAuth()

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm<IUser>();

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();

    try {
      await AuthApi.logIn(data)
      localStorage.setItem('isAuthenticate', JSON.stringify(true))
      window.location.href = '/'

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
        className='input_login'
        type="text" placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <label
        className='label_login'
        htmlFor="password">
        password
      </label>

      <input
        className='input_login'
        type="password"
        placeholder="password"
        {...register("password", { required: true, maxLength: 80 })}
      />

      <button type="submit" className='button-loging'>Log In</button>
    </form>
  </div>
}
