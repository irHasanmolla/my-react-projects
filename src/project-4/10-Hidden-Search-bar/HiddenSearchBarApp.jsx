import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";

export default function HiddenSearchBarApp() {
  const [uiProps, setUiProps] = useState({
    bg: 'purple',
    shadow: '',
    opacity: 0,
    transitions: 'all 0.5s ease-in-out',
    showSearchIcon: true,
    borderBottomColor: '#fff',
  })
  
  let body = (document.body.style)
  
  const inputStyle = {
    width: '20vh',
    height: '50px',
    borderRadius: '25px',
    padding: '8px 10px',
    fontSize: '1rem',
    border: 'none', 
    color: 'white',
    outline: 'none',
    borderBottom: `2px solid ${uiProps.borderBottomColor}`,
    backgroundColor: 'transparent',
    boxShadow: '0px 55px 60px -15px rgba(0, 0, 0, 0.75)',
    opacity: '0.5',
    transitions: 'all 0.5s ease-in-out',
  }
  
  const styleIcon = {
    position: 'absolute',
    top: '20px',
    right: '10px',
    fontSize: '2.5rem',
  }

  const showSearch = () => {
    setUiProps({
      opacity: 1,
      showSearchIcon: false,
    })
  }

  useEffect(() => {
    body.backgroundColor = uiProps.bg;
    body.boxShadow = uiProps.shadow;
    body.transition = uiProps.transitions;
  }, [uiProps.shadow])
  
  return (
    <div className="container">
      <input type="text" placeholder='Search' style={inputStyle} />
      {uiProps.showSearchIcon ? <CiSearch style={styleIcon} onClick={showSearch}/> : null}
    </div>
  )
}
