import React from 'react'
import SpellName from './SpellName';

function SpellsAll({
    allSpells
}) {


  return (
    <div className='flex flex-col '>
        <div className='border-b-2 shadow-2xl border-red-900'><h2 className=' text-xl'>All spells</h2></div>
        <div>
            {allSpells.map(s => <SpellName key={s.index} spell={s}/>)}
        </div>
    </div>
  )
}

export default SpellsAll