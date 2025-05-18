import React, { useContext } from 'react'
import Title from '../component/Title'
import Button from '../component/Button'
import { ThemeContext } from './context/theme-context'

export default function Blog() {
  const {theme, changeTheme} = useContext(ThemeContext)
  
  return (
    <div className="light-and-dark">
      <span style={{position: 'absolute', top: '5px', right: '10px'}}>
        <Button 
          text={theme} 
          btnClass={theme === 'dark' ? 'btn-dark' : 'btn-light'}
          onClick={changeTheme}
        />
      </span>
      <Title text={`My Blog with ${theme} Theme`}/>
      <div style={{padding: '20px', fontSize: '20px'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum, laudantium velit, quis aspernatur architecto debitis quas itaque, magni aut earum assumenda deserunt. Architecto soluta, distinctio impedit asperiores beatae a!
      </div>
    </div>
  )
}
