import React, { useEffect, useState } from 'react'
import Title from '../component/Title'
import Button from '../component/Button'
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";
import { LiaCommentSolid } from "react-icons/lia";

export default function TestimonialApp() {
  const [testimonials, setTestimonials] = useState('');
  const [items, setItems] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [testimonials])
  
  return (
    <div className="testimonial-app">
      <Title text={"Testimonials APp"}/>

      <Button icons={<BsFileEarmarkPostFill />} text={"Posts"} onclick={()=>setTestimonials("Posts")}/>

      <Button icons={<LuUsersRound />} text={"Users"} onclick={()=>setTestimonials("Users")}/>

      <Button icons={<LiaCommentSolid />} text={"Comments"} onclick={()=>setTestimonials("Comments")}/>

      <h3>{!testimonials ? "Select A Button From Above" : testimonials}</h3>

      {!items
        ? null
        : <div className="testimonial-app__items">
            {items.map((item) => (
              <div key={item.id} className="testimonial-app__item">
                <h4>{testimonials === "Posts" 
                  ? item.title 
                  : testimonials === "Users" 
                    ? item.name 
                    : item.body}
                </h4>

                <p>{testimonials === "Posts" 
                  ? item.body 
                  : testimonials === "Users" 
                    ? item.email 
                    : item.name}
                </p>
              </div>
            ))}
          </div>
      }
    </div>
  )
}
