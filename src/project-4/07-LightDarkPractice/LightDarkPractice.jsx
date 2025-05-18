import React, { useEffect, useState } from 'react'
import { UserContext, themes } from './context/Theme-context'
import Blog from './Blog'


export default function LightDarkPractice() {
  const [theme, setTheme] = useState(themes.dark)

  function changeTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  }

  useEffect(()=>{
    document.body.className = theme === 'dark' ? 'dark-bg' : 'light-bg'
  }, [theme])
  
  return (
    <UserContext.Provider value={{theme, changeTheme}}>
      <div className={`light-and-dark ${theme === 'dark' ? 'dark-bg' : 'light-bg'}`}>
        <Blog />
      </div>
    </UserContext.Provider>
  )
}
