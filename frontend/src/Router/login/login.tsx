import { useState } from 'react'
import axios from 'axios'

import './login.css';

export default function Login(type:any) {

  const [loginValue, setLoginValue] = useState({
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

  const handleSubmit = (e:any) =>{
    e.preventDefault();

    axios({
      method: 'post',
      url: 'http://localhost:5000/auth/login',
      // withCredentials: true,
      data: JSON.stringify({
        email: loginValue.email,
        password: loginValue.password
      }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })

    .then(function (type:any) {
      localStorage.setItem('isAuthenticate', JSON.stringify(true))
      window.location.href = '/'
    })
    .catch(function (error) {
      console.log(error);
    });
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
