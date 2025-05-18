import React, { useState } from 'react'

export default function FormSubmission() {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState('');

  const handleName = e => setName(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(name)
  }
  
  return (
    <div className="form-submission">
      <form action="" onSubmit={handleSubmit}>
        <h2>Form Submission: </h2>
        <input type="text" value={name} onChange={handleName}/>
        <button type="submit">Submit</button>
        {isSubmitted && <p>Welcome {isSubmitted}</p>}
        
      </form>
    </div>
  )
}
