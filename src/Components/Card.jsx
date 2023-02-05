
import React from 'react'

const Card = ({ item }) => {
  return (
    <div className='max-w-xs rounded overflow-hidden shadow-lg' key={item.id}>
      <img src={item.thumbnailUrl} className="w-full" />
      <div className='px-6 py-4'>
        <h1 className='font-bold text-xl mb-2'>
           {item.title}
        </h1>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat accusamus dolores aut iusto, sapiente quod sed at ullam dolor maiores quos esse, reprehenderit temporibus veritatis magni omnis aspernatur ut expedita?
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">3{item.id}</span>
      </div>
    </div>
  )
}

export default Card