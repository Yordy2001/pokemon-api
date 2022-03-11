import React, { useState } from 'react'
import axios from 'axios'

import './style.css'

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
    .then(function (response:any) {
      localStorage.setItem('session', JSON.stringify({'isAuthenticate': true}))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className=''>
      <div className='background'>
        <div className='shape'></div>
        <div className='shape'></div>
      </div>
      <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <label htmlFor="email">E-mail</label>
          <input onChange={handleChange} type='email' name='email' placeholder='Email'  required />

          <label htmlFor="password">password</label>
          <input  onChange={handleChange} type="password" name="password"  id="password" required/>

          <button type="submit">Log In</button>
      </form>
    </div>
  )
}
