import React from 'react';
import Link from 'next/link';
import { useTranslations } from "next-intl";

import Heading from './Heading';
import InputFields from './InputFields';
import Option from './Option';

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

const Form = ({ type }: FormProps) => {
  const t = useTranslations("Index");

  const { BUTTON_TEXT, BOTTOM_TEXT, LINK, SPAN_BOTTOM_TEXT } = FORM_CONTENT[type as keyof typeof FORM_CONTENT];

  return (
    <div className="w-[45%]">
          <Heading />
          <InputFields />
          <Option />
          <button className="w-full bg-custom-green text-black font-semibold py-2 mt-6 rounded-lg transition duration-300">
            {t(BUTTON_TEXT)}
          </button>
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
    </div>
  )
}

export default Form
