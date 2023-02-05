
import React from 'react'

const Card = ({ item }) => {
  return (
    <div className='flex flex-col' key={item.id}>
      <img src={item.thumbnailUrl} className="w-16 h-16" />
      <h1>
        {item.id}
      </h1>
    </div>
  )
}

export default Card