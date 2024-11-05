import React from 'react'
import Heading from './Heading';
import Option from './Option';
import InputFields from './InputFields';

const Form = () => {

  return (
    <div className="w-[45%]">
          {/* Heading */}
          <Heading />

          {/* Input Fields with Gradient Border on Focus */}
          <InputFields />

          {/* Options */}
          <Option />

          {/* Submit Button */}
          <button className="w-full font-plusJakaraSans bg-[#B6F09C] text-[#0C1132] font-bold py-2 mt-6 rounded-md transition duration-300">
            Login
          </button>

          {/* Sign Up Link */}
          <p className="font-bold text-center mt-4 text-[#6F767E]">
            Don't have acccount?{' '}
            <span className="font-bold bg-gradient-to-br from-[#82DBF7] to-[#B6F09C] bg-clip-text text-transparent cursor-pointer hover:underline">
              Signup
            </span>
          </p>
        </div>
  )
}

export default Form
