import { createContext, useState} from 'react'

const SpellContext = createContext()

export function SpellProvider({ children }) {
    const [catnip, setCatnip] = useState([])
    const [levelOneSpell, setlevelOneSpell] = useState([])
    const [levelTwoSpell, setlevelTwoSpell] = useState([])


    const getCatnip = (details) => {
        if (catnip.find(x => x.index === details.index)) {
            alert('You have already added this spell for today')
        }
        else if (catnip.length === 3) {
            alert('You have picked the maximum amount of catnips')
        }else{
            setCatnip((prevState) => [...prevState, details])
        }  
    }
    const getSpellOne = (details) => {
        if (levelOneSpell.find(x => x.index === details.index)) {
            alert('You have already added this spell for today')
        }
        else if (levelOneSpell.length === 4) {
            alert('only 4 level one spells allowed at this level')
        }else{
            setlevelOneSpell((prevState) => [...prevState, details])
        }
        
    }
    const getSpellTwo = (details) => {
        if (levelTwoSpell.find(x => x.index === details.index)) {
            alert('You have already added this spell for today')
        }
        else if (levelTwoSpell.length === 2) {
            alert('only 2 level two spells allowed at this level')
        }else{
            setlevelTwoSpell((prevState) => [...prevState, details])
        }
    }

    return(
        <SpellContext.Provider value={ {
            catnip, 
            levelOneSpell, 
            levelTwoSpell, 
            getCatnip, 
            getSpellOne, 
            getSpellTwo}}>
                {children}
        </SpellContext.Provider>
    )
}

export default SpellContext