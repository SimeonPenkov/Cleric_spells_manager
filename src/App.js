import { useEffect, useState } from 'react';
import Catnips from './components/Catnips';
import LevelSpells from './components/LevelSpells';
import SpellsAll from './components/SpellsAll';
import { getAll } from './services/spellService';
import { SpellProvider } from './SpellContext';


function App() {

  const [allSpells, setAllSpells] = useState([])

  useEffect(() => {
    getAll().then(res => setAllSpells(res.results))
  }, [])


  return (
    <div className=" min-h-screen bg-gray-700 text-neutral-50 flex flex-col items-center max-w-auto font-merriweather">
      <SpellProvider>
      <div className=' min-w-full'>
          <div className='flex flex-col'>
            <div className='basis-1/3 border-2 border-red-900 rounded-md shadow-xl p-4 m-1.5 flex flex-col'>
              <Catnips/>
            </div>
            <div className='basis-1/3 border-2 border-red-900 rounded-md shadow-xl p-4 m-1.5 flex flex-col'>
              <LevelSpells level={1}/>
            </div>
            <div className='basis-1/3 border-2 border-red-900 rounded-md shadow-xl p-4 m-1.5 flex flex-col'>
              <LevelSpells level={2}/>
            </div>
          </div>
      </div>
      <div className='border-2 border-red-900 rounded-md shadow-2xl p-4 m-3 max-w-2xl '>
            <SpellsAll allSpells={allSpells}/>
      </div>
      </SpellProvider>
    </div>
  )
};

export default App;
