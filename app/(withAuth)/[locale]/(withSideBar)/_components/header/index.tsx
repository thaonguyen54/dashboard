"use client"
import React from 'react'
import Image from 'next/image'

import InputField from '@/components/ui/input-field'
import LanguagueSelector from '@/app/_components/LanguageSelector'
import MessageIcon from '@/app/_components/Icons/MessageIcon'
import BellIcon from '@/app/_components/Icons/BellIcon'
import SearchIcon from '@/app/_components/Icons/SearchIcon'

const DashboardHeading = () => {
  return (
    <div className='bg-main-opposition border border-main-opposition flex justify-between p-6 mt-2 ml-4 mr-4 w-auto rounded-2xl '>
      <InputField className='w-[340px]  placeholder-secondary-grey-dark bg-bg-input-dashboard' icon={<SearchIcon width='18' height='24'/>} placeholder="Search anything" type="text" />
      <div className='flex items-center gap-8'>
        <LanguagueSelector/>
        <div className='flex gap-8 items-center'>
          <MessageIcon width="24" height="24" />
          <BellIcon width="24" height="24" />
          <Image className='rounded-[20px] w-[40px] h-[40px] object-cover' src={'/images/avatar.png'} alt='avatar' width={20} height={20}/>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeading
