import Link from 'next/link';
import React from 'react';

import Heading from './Heading';
import InputFields from './InputFields';
import Option from './Option';

interface FormProps {
  type: string
}

const FORM_CONTENT = {
  LOGIN: {
    LINK: '/register',
    TEXT: `Log in`,
    BOTTOM_TEXT: `Don't have an account?`,
  },
  REGISTER: {
    LINK: '/login',
    TEXT: `Sign up`,
    BOTTOM_TEXT: `Already have an account?`,
  }
}

const Form = ({type}: FormProps) => {
  const { TEXT, BOTTOM_TEXT, LINK } = FORM_CONTENT[type as keyof typeof FORM_CONTENT];

  return (
    <div className="w-[45%]">
          <Heading />
          <InputFields />
          <Option />
          <button className="w-full bg-custom-green text-black font-semibold py-2 mt-6 rounded-lg transition duration-300">
            {TEXT}
          </button>
          {
            <div className='font-bold text-center mt-4 text-secondary-grey-dark'>
              {BOTTOM_TEXT}{' '}
              <Link href={LINK}>
                <span className="bg-gradient-to-br font-semibold from-custom-aqua to-custom-green bg-clip-text text-transparent cursor-pointer hover:underline hover:decoration-custom-green">
                  {TEXT}
                </span>
              </Link>
            </div>
          }
        </div>
  )
}

export default Form
