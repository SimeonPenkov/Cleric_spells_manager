import React, { useContext } from 'react'
import SpellContext from '../SpellContext'
import SpellName from './SpellName'

function Catnips() {


  const { catnip } = useContext(SpellContext)

  return (
    <>
      <div className='border-b border-red-900 shadow-xl'><h2 className=' text-lg '>Catnips</h2></div>
      <div className='flex flex-col '>
        {catnip.map(s => <SpellName key={s.index} spell={s}/>)}
      </div>
    </>
  )
}

export default Catnips