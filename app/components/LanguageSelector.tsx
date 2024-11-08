"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Check, ChevronDown } from 'lucide-react'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type LanguagueSelectorOption = {
  code: string,
  name: string,
  flag: string,
  image: string
}

const LANGUAGES: LanguagueSelectorOption[] = [
  {code: 'en', name: 'English', flag: '🇺🇸', image: '/icons/en-icon.png'},
  {code: 'vi', name: 'Vietnamese', flag: '🇻🇳', image: '/icons/vi-icon.png'},
]

const LanguagueSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguagueSelectorOption>(LANGUAGES[0])
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeLanguage = (language: LanguagueSelectorOption) => {
    setSelectedLanguage(language)
  }

  if (!mounted) return null;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="flex w-auto h-12 items-center gap-3 px-3 py-4 text-gray-700 border-border-language-selector border rounded-full shadow-sm">
                <Image className='object-cover' src={selectedLanguage.image} width={30} height={20} alt="language-icon" />
                <span className='flex-grow text-sm text-secondary-grey-dark'>{selectedLanguage.name}</span>
                <ChevronDown className="w-4 h-4 justify-end text-secondary-grey-dark" />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className={`w-48 mt-2 bg-bg-drop-content-language border-border-drop-content-language border text-white rounded-lg shadow-lg`}>
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleChangeLanguage(language)}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 text-secondary-grey-dark"
          >
            <Image src={language.image} width={30} height={20} alt="language-icon" />
            <span className="flex-1">{language.name}</span>
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
