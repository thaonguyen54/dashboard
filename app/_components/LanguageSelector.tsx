"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Check, ChevronDown } from 'lucide-react'

import Link from 'next/link'
import React, { useState } from 'react'
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from 'next/navigation'

import EnglishIcon from './Icons/EnglishIcon'
import VietnameseIcon from './Icons/VietnameseIcon'

type LanguagueSelectorOption = {
  code: string,
  name: string,
  flag: string,
  icon: React.ReactNode
}

const LANGUAGES: LanguagueSelectorOption[] = [
  {code: 'en', name: 'ENGLISH', flag: '🇺🇸', icon: <EnglishIcon width='30' height='20'/>},
  {code: 'vi', name: 'VIETNAMESE', flag: '🇻🇳', icon: <VietnameseIcon width='30' height='20'/>},
]

const LanguagueSelector = () => {
  const locale = useLocale();
  const pathname = usePathname();
  
  const [selectedLanguage] = useState<LanguagueSelectorOption>(
    LANGUAGES.find((language) => language.code === locale) || LANGUAGES[0]
  )
   
  const t = useTranslations("LANGUAGE");
  
  const languageSwitcher = (language: LanguagueSelectorOption) => {
    const segments = pathname.split('/');
    segments[1] = language.code;
    const newPathname = segments.join('/');
    return newPathname;
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <div className="flex w-auto h-12 items-center gap-3 px-3 py-4 cursor-pointer text-gray-700 border-border-language-selector border rounded-full shadow-sm focus:outline-none">
                {selectedLanguage.icon}
                <span className='flex-grow text-sm text-secondary-grey-dark'>{t(selectedLanguage.name)}</span>
                <ChevronDown className="w-4 h-4 justify-end text-secondary-grey-dark" />
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className={"w-48 mt-2 bg-bg-drop-content-language border-border-drop-content-language border text-white rounded-lg shadow-lg"}>
        {LANGUAGES.map((language) => (
          <Link href={languageSwitcher(language)} key={language.code}>
            <DropdownMenuItem
            className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100 text-secondary-grey-dark">
              {language.icon}
              <span className="flex-1">{t(language.name)}</span>
              {selectedLanguage.code === language.code && (
                <Check className="w-4 h-4 text-green-500" />
              )}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default LanguagueSelector
