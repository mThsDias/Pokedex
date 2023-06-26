import React from 'react'
import { colors } from '../styles/color'

const PokemonCard = ({id, image, name, types}) => {

    const handleType0 = () => {
        if(types[1]) {
            return types[0].type.name
        } else {
            return types[0].type.name
        }
    }

    const handleType1 = () => {
        if(types[1]) {
            return types[1].type.name
        }
    }

    const background = types[0].type.name

    return (
        <div style={{background: colors[`${background}`]}} className=' rounded-3xl px-8 ml-5 mb-5' key={id}>
            <div className='w-60 bg-[url("../img/pokebola.svg")] bg-cover bg-center'>
                <div className='flex items-center justify-between text-white font-bold pb-6'>
                    <h1 className='text-3xl mt-2'>{name}</h1>
                    <span className='text-3xl mt-2 text-slate-100 opacity-60'>#0{id}</span>
                </div>
                <div className='flex justify-between items-center gap-24'>
                    <div className=' flex flex-col gap-1'>
                        <span className='text-sm font-semibold text-white rounded-full bg-slate-100 bg-opacity-60 px-3'>{handleType0()}</span>
                        <span className='text-sm font-semibold text-white rounded-full bg-slate-100 bg-opacity-60 px-3'>{handleType1()}</span>
                    </div>
                    <img className='w-24 h-24 mb-2' src={image} alt={name}/>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard