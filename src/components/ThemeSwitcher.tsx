'use client'

import { LoaderCircle, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()
  
    useEffect(() => setMounted(true), [])
  
    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }
  
    if (!mounted) {
        return (
            <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-b-full">
                <LoaderCircle className="animate-spin" color='white' />
            </div>
        )
    }
  
    return (
        <button 
            className='flex group items-center justify-center w-12 h-12 bg-gray-700 rounded-b-full cursor-pointer duration-300 hover:bg-gray-500 relative overflow-hidden' 
            onClick={toggleTheme}
            aria-label={resolvedTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            <Sun 
                className={`absolute transition-all duration-300 transform ${
                    resolvedTheme === 'light' 
                        ? 'opacity-100 translate-y-0 rotate-0 group-hover:rotate-6' 
                        : 'opacity-0 translate-y-10 rotate-90'
                }`} 
                color='white' 
            />
            <Moon 
                className={`absolute transition-all duration-300 transform ${
                    resolvedTheme === 'dark' 
                        ? 'opacity-100 translate-y-0 rotate-0 group-hover:rotate-6' 
                        : 'opacity-0 -translate-y-10 rotate-90'
                }`} 
                color='white' 
            />
        </button>
    )
}