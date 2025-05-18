import React, { useState } from 'react'
import Title from '../component/Title'

export default function SignatureApp() {
  const [signatureText, setSignatureText] = useState('')
  const [signatureDate, setSignatureDate] = useState('Select Date')
  
  document.body.style.backgroundColor = '#f0f0f0'
  
  return (
    <div className="signature-app" style={{ padding: '20px' }}>
      <h2>Signature App</h2>
      <br />
      <Title text={!signatureText ? 'Signature': signatureText}/>
      <Title text={!signatureDate ? 'DoB' : signatureDate}/>
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aut sapiente aliquam ducimus eveniet voluptate nam tempora error eum qui? Tempore rem sequi porro asperiores dolorem natus quae, impedit ipsum.
      </>
      <br />
      <>
        <input 
          type="date" 
          value={signatureDate}
          onChange={(e) => setSignatureDate(e.target.value)}
        />
        <input 
          type="text" 
          value={signatureText}
          onChange={(e) => setSignatureText(e.target.value)}
          placeholder="Signature"
        />
      </>
    </div>
  )
}
