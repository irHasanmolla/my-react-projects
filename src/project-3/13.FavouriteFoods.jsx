import React from 'react'

export default function FavouriteFoods() {
  const foods = ['Biryani', 'Pizza', 'Sushi', 'Noodles', 'Ice Cream']
  
  return (
    <div className="favourite-foods">
      <h1>My Favorite Foods</h1>
      <ul>
        {foods.map((f, index)=>(
          <li key={index}>
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}
