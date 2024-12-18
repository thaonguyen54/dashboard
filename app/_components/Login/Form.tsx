"use client"
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link';
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';


import Heading from './Heading';
import Option from './Option';
import InputField from '@/components/ui/input-field';
import EmailIcon from '../Icons/EmailIcon';
import PasswordIcon from '../Icons/PasswordIcon';
interface FormProps {
  type: string
}

const FORM_CONTENT = {
  LOGIN: {
    LINK: '/register',
    BUTTON_TEXT: 'LOGIN',
    BOTTOM_TEXT: 'DONT_HAVE_ACCOUNT', //Mapping with [language].json file
    SPAN_BOTTOM_TEXT: 'REGISTER'
  },
  REGISTER: {
    LINK: '/login',
    BUTTON_TEXT: 'REGISTER',
    BOTTOM_TEXT: 'ALREADY_HAVE_ACCOUNT',
    SPAN_BOTTOM_TEXT: 'LOGIN'
  }
}

const AUTH_ENDPOINT = {
  LOGIN: 'auth/local',
  REGISTER: 'auth/local/register'
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const Form = ({ type }: FormProps) => {
  
  const t = useTranslations("AUTH");
  const tHelperText = useTranslations("HELPER_TEXT");
  const { BUTTON_TEXT, BOTTOM_TEXT, LINK, SPAN_BOTTOM_TEXT } = FORM_CONTENT[type as keyof typeof FORM_CONTENT];
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (authData: FieldValues) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${AUTH_ENDPOINT[type as keyof typeof AUTH_ENDPOINT]}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        type === 'LOGIN' ? {
          identifier: authData.email,
          password: authData.password
        } : {
          username: authData.email.split('@')[0],
          email: authData.email,
          password: authData.password
        }
      ),
    })

    if(response.status === 400){
      const { error } = await response.json();
      toast.error(error.message);
      return;
    }

    const { jwt } = await response.json();
    if(!jwt) {
      toast.error('Email or password is incorrect');
      return;
    }
    
    const setToken = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/set-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        accessToken: jwt
      })
    })

    if (setToken.status === 200) {
      router.push('/dashboard');
    }
  }

  return (
    <div className="w-[45%]">
          <Heading />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-4'>
              <InputField icon={<EmailIcon width="18" height="14" />} className='w-full border-input border bg-input' error={errors.email} helperText={tHelperText("INVALID_EMAIL")} placeholder="Email" type="text" {...register('email', {pattern: EMAIL_REGEX})}/>
              <InputField icon={<PasswordIcon width="14" height="16" />} className='w-full border-input border bg-input' error={errors.password} helperText={tHelperText("INVALID_PASSWORD")} placeholder="Password" type="password" {...register('password', {minLength: 6, maxLength: 255})} />
            </div>  
            {/* <InputFields /> */}
            <Option />
            <button
              type="submit"
              className="w-full bg-custom-green text-black font-semibold py-2 mt-6 rounded-lg transition duration-300">
              {t(BUTTON_TEXT)}
            </button>
          </form>
          {
            <div className='font-bold text-center mt-4 text-secondary-grey-dark'>
              {t(BOTTOM_TEXT)}{' '}
              <Link href={LINK}>
                <span className="bg-gradient-to-br font-semibold from-custom-aqua to-custom-green bg-clip-text text-transparent cursor-pointer hover:underline hover:decoration-custom-green">
                  {t(SPAN_BOTTOM_TEXT)}
                </span>
              </Link>
            </div>
          }
          <ToastContainer />
    </div>
  )
}

export default Form
