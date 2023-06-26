import React from "react"

import Search from './Search'

const NavBar = ({pokemonFilter}) => {
  return (
    <nav className='bg- mb-10 pr-32 pl-32 pb-5 flex items-center justify-between bg-gray-800'>
       <Search pokemonFilter={pokemonFilter}/>
    </nav>
  )
}

export default NavBar