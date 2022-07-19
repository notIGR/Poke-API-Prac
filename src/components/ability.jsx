import { useContext } from "react"
import { PokeDataContext } from "../App"

export default function Abilities () {
    const { pokeData } = useContext(PokeDataContext)
    return (
        <>
        <h2>Abilities</h2>
        <pre>
            {pokeData && JSON.stringify(pokeData.abilities, undefined, 2)}
        </pre>
        </>
    )
}