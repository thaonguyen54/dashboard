import Link from 'next/link';
import React from 'react';

import Heading from './Heading';
import InputFields from './InputFields';
import Option from './Option';

interface FormProps {
  type: string
}

const FORM_TYPES = {
  LOGIN: 'login',
  REGISTER: 'register'
}

const FORM_CONTENT = {
  LOGIN: {
    BOTTOM_TEXT: `Don't have an account?`,
  },
  REGISTER: {
    BOTTOM_TEXT: `Already have an account?`,
  }
}

const Form = ({type}: FormProps) => {
  
  return (
    <div className="w-[45%]">
          <Heading />

          <InputFields />

          <Option />

          <button className="w-full bg-custom-green text-black font-semibold py-2 mt-6 rounded-md transition duration-300">
            {type == FORM_TYPES.LOGIN ? 'Log in' : 'Sign Up'}
          </button>
          {
            <div className='font-bold text-center mt-4 text-secondary-grey-dark'>
              {type == FORM_TYPES.LOGIN ? FORM_CONTENT.LOGIN.BOTTOM_TEXT : FORM_CONTENT.REGISTER.BOTTOM_TEXT}{' '}
              <Link href={`${type == FORM_TYPES.LOGIN ? '/register' : '/login'}`}>
                <span className="bg-gradient-to-br font-semibold from-[#82DBF7] to-[#B6F09C] bg-clip-text text-transparent cursor-pointer hover:underline hover:decoration-[#B6F09C]">
                  {type == FORM_TYPES.LOGIN ? 'Sign up' : 'Login'}
                </span>
              </Link>
            </div>
          }
        </div>
  )
}

export default Form
