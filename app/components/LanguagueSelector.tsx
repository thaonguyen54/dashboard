"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Check, ChevronDown } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface LanguagueSelectorOption {
    code: string,
    name: string,
    flag: string,
    image: string
}

const languages: LanguagueSelectorOption[] = [
    {code: 'en', name: 'English', flag: '🇺🇸', image: '/icons/en-icon.png'},
    {code: 'vi', name: 'Vietnamese', flag: '🇻🇳', image: '/icons/vi-icon.png'},
]

const LanguagueSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<LanguagueSelectorOption>(languages[0])
    const [mounted, setMounted] = useState(false);
    const {theme} = useTheme();

    // When mounted on client, now we can show the component, prevent hydration
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
            <div className={`flex items-center gap-3 px-6 py-4 text-gray-700 ${theme === 'dark' ? 'border-[#363A3D]' : 'bg-white border-white'} border rounded-full shadow-sm`}>
                <Image className='object-cover' src={selectedLanguage.image} width={30} height={20} alt="language-icon" />
                <span className='flex-grow text-[#6F767E]'>{selectedLanguage.name}</span>
                <ChevronDown className={`w-4 h-4 justify-end text-[#6F767E]`} />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className={`w-48 mt-2 ${theme === 'dark' ? 'bg-[#363A3D] border-[#363A3D]' : 'bg-white border-white'} borderr text-whiteounded-md shadow-lg`}>
        {languages.map((language) => (
          <DropdownMenuItem 
            key={language.code}
            onClick={() => handleChangeLanguage(language)}
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
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
