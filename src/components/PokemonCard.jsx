import React from 'react'
import { colors } from '../styles/color'

const PokemonCard = ({id, image, name, types}) => {

    const handleType = () => {
        if(types[1]) {
            return types[0].type.name + ' | ' + types[1].type.name
        } else {
            return types[0].type.name
        }
    }

    const background = types[0].type.name

    return (
        <div className=' border rounded-lg bg-gray'>
            <div className='flex items-center flex-col p-8' key={id}>
                <div className='bg-red rounded-full px-6 text-white relative mb-5'>#{id}</div>
                <div style={{background: colors[`${background}`]}} className='border rounded-full p-4'>
                    <img className='w-36 h-36 pt-10' src={image} alt={name} />
                </div>
                <h1 className='font-bold mt-1 text-black text-2xl'>{name}</h1>
                <p className='text-black text-xs'>{handleType()}</p>
                <button className='border rounded-md p-2 mt-5 bg-slate-100 text-black'>Detalhes</button>
            </div>
        </div>
    )
}

export default PokemonCard