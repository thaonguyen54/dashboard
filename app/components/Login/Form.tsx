import React from 'react'
import Heading from './Heading';
import Option from './Option';
import InputFields from './InputFields';
import Link from 'next/link';

interface FormProps {
  type: string
}

const LOGIN_TYPES = {
  LOGIN: 'login',
  REGISTER: 'register'
}

const Form = ({type}: FormProps) => {
  
  return (
    <div className="w-[45%]">
          <Heading />

          <InputFields />

          <Option />

          <button className="w-full bg-[#B6F09C] text-[#0C1132] font-semibold py-2 mt-6 rounded-md transition duration-300">
            {type == LOGIN_TYPES.LOGIN ? 'Log in' : 'Sign Up'}
          </button>

          {
            type == LOGIN_TYPES.LOGIN ? 
            <div className='font-bold text-center mt-4 text-[#6F767E]'>
              Don't have an account?{' '}
              <Link href={'/register'}>
                <span className="bg-gradient-to-br font-semibold from-[#82DBF7] to-[#B6F09C] bg-clip-text text-transparent cursor-pointer hover:underline hover:decoration-[#B6F09C]">
                  Sign Up
                </span>
              </Link>
            </div> : 
            <div className='font-bold text-center mt-4 text-[#6F767E]'>
              Login if you have an account!{' '}
              <Link href={'/login'}>
                <span className="font-semibold bg-gradient-to-br from-[#82DBF7] to-[#B6F09C] bg-clip-text text-transparent cursor-pointer hover:underline hover:decoration-[#B6F09C]">
                  Login
                </span>
              </Link>
            </div>
          }


        </div>
  )
}

export default Form
