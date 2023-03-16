import React, { useContext, useState } from 'react'
import SpellContext from '../SpellContext'
import SpellName from './SpellName'

function LevelSpells({
    level
}) {

  const { levelOneSpell, levelTwoSpell } = useContext(SpellContext)

  return (
    <div>
        <div className='border-b border-red-900 shadow-xl' ><h2 className=' text-lg'>Level {level} spells</h2></div>
        <div className='flex flex-col '>
          {level === 1 ? 
          levelOneSpell.map(s => <SpellName key={s.index} spell={s}/>) 
          :
          levelTwoSpell.map(s => <SpellName key={s.index} spell={s}/>)}
        </div>
    </div>
  )
}

export default LevelSpells