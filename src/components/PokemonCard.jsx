import React from 'react'

const PokemonCard = ({id, image, name, types}) => {

    const handleType = () => {
        if(types[1]) {
            return types[0].type.name + ' | ' + types[1].type.name
        } else {
            return types[0].type.name
        }
    }

  return (
        <div className='flex items-center flex-col p-12 rounded-2xl bg-gray-700' key={id}>
            <div className='bg-red-500 rounded-full px-6 text-white relative'>#{id}</div>
            <img className='w-36 h-36 pt-10' src={image} alt={name} />
            <h1 className='font-bold mt-1 text-white text-2xl'>{name}</h1>
            <p className='text-white text-xs'>{handleType()}</p>
            <button className='border rounded-md p-2 mt-5 bg-slate-100 text-black'>Detalhes</button>
        </div>
  )
}

export default PokemonCard