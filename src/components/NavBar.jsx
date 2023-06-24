import React from "react"

import Search from './Search'
import imgLogo from '../img/logo.png'


const NavBar = ({pokemonFilter}) => {
  return (
    <nav className='bg- mb-10 pr-32 pl-10 flex items-center justify-between'>
      <img className="w-auto h-20" src={imgLogo} alt="" />
       <Search pokemonFilter={pokemonFilter}/>
    </nav>
  )
}

export default NavBar