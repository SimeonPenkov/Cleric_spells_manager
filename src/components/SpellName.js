import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SpellDetails from './SpellDetails'


function SpellName({
    spell
}) {

    const [detailsShow, setDetailsShow] = useState(false)

    const toggleShowDetails = () => {
        setDetailsShow(!detailsShow)
    }

  return (
    <div className=' bg-red-800 bg-opacity-30 border-1 shadow-xl border-red-900 rounded-lg p-2 my-1.5 flex flex-wrap justify-evenly gap-3'>
        <div>{spell.name}</div>
        {/* <div><Link to={baseUrl + spell.url}>Spell details</Link></div>    */} 
        <button className=' bg-red-900 border b-black-900 rounded-lg p-0.5 hover:bg-red-600 max-h-10 text-sm ml-auto' 
        onClick={toggleShowDetails}>Show details</button>
          <div>{detailsShow ? <SpellDetails spellUrl={spell.url}/> : null}</div>     
    </div>
    
  )
}

export default SpellName