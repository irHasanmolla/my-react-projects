import React, { useState } from 'react'
import Title from '../component/Title'
import { AiFillSmile } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Dogydog from '../image/dogydog.jpg'

export default function LikeMyPhoto() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  }

  return (
    <div className="like-my-photo">
      <Title text={"Like Photo App"}/>
      <h2 style={{marginTop: '20px'}}>Likes - {count}</h2>
      
      <div className="like-my-photo-container">
        <div className='card-header'>
          <AiFillSmile style={{marginRight: '10px'}}/>
          DogyDog
        </div>
        <div className='card-body'>
          <img onDoubleClick={()=>handleClick()} src={Dogydog} alt="img" />
        </div>
        <div className='card-footer'>
          <FaComment />
          {like ? <FaHeart onClick={()=>handleClick()} style={{color: 'red'}}/> : <FaRegHeart onClick={()=>handleClick()}/>}
        </div>
      </div>
    </div>
  )
}
