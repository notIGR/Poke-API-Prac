import { useContext } from "react"
import { PokeDataContext } from "../App"

export default function ChangePoke () {
const {pokeName, setPokeName } = useContext(PokeDataContext)

const handleChangePokeName = (e) => {
    setPokeName(e.currentTarget.value)
}

    return (
        <>
        <h2>ChangePoke</h2>
        <input 
        type="search" 
        value={pokeName} 
        onChange ={handleChangePokeName}
        />
        
        </>
    )
}