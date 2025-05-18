import React, { useEffect, useState } from 'react'
import { ThemeContext, themes } from './context/theme-context'

import Blog from './Blog'

export default function LightAndDarkMode() {
  const [theme, setTheme] = useState(themes.dark)

  function changeTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  }

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-bg dark-text' : 'light-bg light-text'
  }, [theme])
  
  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <div className={`light-and-dark ${theme === 'dark' ? 'dark-bg dark-text' : 'light-bg light-text'}`}>
        <Blog />
      </div>
    </ThemeContext.Provider>
  )
}
