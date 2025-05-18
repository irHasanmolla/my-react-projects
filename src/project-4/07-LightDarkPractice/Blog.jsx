import React, { useContext } from 'react'
import Button from '../component/Button'
import { UserContext } from './context/Theme-context'

export default function Blog() {
  const {theme, changeTheme} = useContext(UserContext)

  return (
    <div className='light-and-dark'>
      <span style={{position: 'absolute', right: '5px', top: '5px'}}>
        <Button 
          text={theme}
          btnClass={theme === 'dark' ? 'btn-dark' : 'btn-light'}
          onClick={changeTheme}
        />
      </span>

      <h1>Blog will shown here: {theme}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibusLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibusLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibusLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    </div>
  )
}
