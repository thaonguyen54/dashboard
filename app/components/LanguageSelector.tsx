"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Check, ChevronDown } from 'lucide-react'

import Image from 'next/image'
import React, { useState } from 'react'
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';

type LanguagueSelectorOption = {
  code: string,
  name: string,
  flag: string,
  image: string
}

const LANGUAGES: LanguagueSelectorOption[] = [
  {code: 'en', name: 'ENGLISH', flag: '🇺🇸', image: '/icons/en-icon.png'},
  {code: 'vi', name: 'VIETNAMESE', flag: '🇻🇳', image: '/icons/vi-icon.png'},
]

const LanguagueSelector = () => {
  const locale = useLocale();
  let pathname = usePathname();
  
  const [selectedLanguage, setSelectedLanguage] = useState<LanguagueSelectorOption>(
    LANGUAGES.find((language) => language.code === locale) || LANGUAGES[0]
  )
   
  const t = useTranslations();
  
  const handleChangeLanguage = (language: LanguagueSelectorOption) => {
    pathname = pathname.split('/').filter(Boolean).map(segment => segment === locale ? language.code : segment).join('/');
    window.location.href = `/${pathname}`;
    setSelectedLanguage(language);
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="flex w-auto h-12 items-center gap-3 px-3 py-4 text-gray-700 border-border-language-selector border rounded-full shadow-sm">
                <Image className='object-cover' src={selectedLanguage.image} width={30} height={20} alt="language-icon" />
                <span className='flex-grow text-sm text-secondary-grey-dark'>{t(selectedLanguage.name)}</span>
                <ChevronDown className="w-4 h-4 justify-end text-secondary-grey-dark" />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className={"w-48 mt-2 bg-bg-drop-content-language border-border-drop-content-language border text-white rounded-lg shadow-lg"}>
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            onClick={() => handleChangeLanguage(language)}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 text-secondary-grey-dark"
            key={language.code}
            >
              <Image src={language.image} width={30} height={20} alt="language-icon" />
              <span className="flex-1">{t(language.name)}</span>
              {selectedLanguage.code === language.code && (
                <Check className="w-4 h-4 text-green-500" />
              )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default LanguagueSelector
