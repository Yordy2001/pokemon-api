import React from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../interface';
import fetchAuth from '../../utils/API/fetchAuth';

const AuthApi = new fetchAuth();

export default function Register() {
  const { register, handleSubmit } = useForm<IUser>();
  let navigate = useNavigate();

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();

    try {
      await AuthApi.register(data);
      window.location.href = '/login';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_body">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
        <label className="label_login" htmlFor="password">
          FirstName
        </label>

        <input
          {...register('firstName', { required: true, maxLength: 50 })}
          className="input_login"
          type="firstName"
          placeholder="Jon Doe"
        />
        <label className="label_login" htmlFor="email">
          E-mail
        </label>
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className="input_login"
          type="text"
          placeholder="jon_doe@gmail.com"
        />
        <label className="label_login" htmlFor="password">
          Password
        </label>

        <input
          {...register('password', { required: true, maxLength: 80 })}
          className="input_login"
          type="password"
          placeholder="*******"
        />

        <button type="submit" className="button-loging register">
          Register
        </button>

        <button
          type="submit"
          className="button-loging"
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
