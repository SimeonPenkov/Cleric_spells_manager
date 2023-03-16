import React, { useContext, useEffect, useState } from 'react'
import SpellContext from '../SpellContext'

function SpellDetails({
  spellUrl
}) {
  const baseUrl = 'https://www.dnd5eapi.co'

  const [spellDetails, setSpellDetails] = useState({})

  const  { 
    getCatnip, 
    getSpellOne, 
    getSpellTwo
  } = useContext(SpellContext) 


  useEffect(() => {
    fetch(baseUrl + spellUrl)
    .then(response => response.json())
    .then(data => setSpellDetails(data))
  }, [spellUrl])


  return (
    
    <div className=' text-sm max-w-fit'>
      <div className='pb-0.5'>{spellDetails.desc ? 
        spellDetails.desc.map((p, i) => <p key={i}>{p}</p>) : null}
      </div>
      <div className='pb-0.5'><p>Range: {spellDetails.range}</p></div>
      <div className=' flex gap-1.5'><p>Components: </p>{spellDetails.components ? 
        spellDetails.components.map((p, i) => <p key={i}>{p}</p>) : null}
        </div>
      <div className='pb-0.5'><p>Material needed: {spellDetails.material}</p></div>
      <div className='pb-0.5'><p>Duration: {spellDetails.duration}</p></div>
      <div className='pb-0.5'><p>Casting time: {spellDetails.casting_time}</p></div>
      <div className='pb-0.5'><p>Level: {spellDetails.level}</p></div>

      <div className='pb-0.5'>     
        {spellDetails.level === 0 ? 
        <button className=' bg-red-900 border b-black-900 rounded-lg p-0.5 hover:bg-red-600'
        onClick={() => getCatnip(spellDetails)}>Add to Catnips</button> : null}
        {spellDetails.level === 1 ? 
        <button className=' bg-red-900 border b-black-900 rounded-lg p-0.5 hover:bg-red-600'
        onClick={() => getSpellOne(spellDetails)}>Add to level 1 spells list</button> : null}
        {spellDetails.level === 2 ? 
        <button className=' bg-red-900 border b-black-900 rounded-lg p-0.5 hover:bg-red-600'
        onClick={() => getSpellTwo(spellDetails)}>Add to level 2 spells list</button> : null}
      </div>

    </div>
  )
}

export default SpellDetails