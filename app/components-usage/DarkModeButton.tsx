'use client';
import { useTheme } from 'next-themes'
import React from 'react'

const DarkModeButton = () => {
    const { theme, setTheme } = useTheme()
    console.log(theme,'🤖🤖🤖🤖🤖🤖🤖🤖')
  return (
    <button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  >
    Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
  </button>
  )
}

export default DarkModeButton