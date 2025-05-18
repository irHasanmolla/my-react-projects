import React from 'react'
import Title from '../component/Title'


export default function RandomizeColorApp() {
  const randomColor = (e) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    e.target.style.backgroundColor = `#${randomColor}`;
  }
  
  // const getRandomColor = () => {
  //   let letters = '0123456789ABCDEF';
  //   let color = '#';
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // }
  
  return (
    <div className="random-color">
      
      <Title text={'Randomize Color'}/>

      <button onClick={(e)=>{randomColor(e)}} style={{marginTop: '50px'}}>Click Me</button>
      <button
        
        onClick={()=>{randomColor()}}>Click Me</button>
      <button onClick={()=>{randomColor()}}>Click Me</button>
      <button onClick={()=>{randomColor()}}>Click Me</button>
    </div>
  )
}
