import { useContext } from "react"
import { PokeDataContext } from "../App"

export default function Fourms () {
    const { pokeData } = useContext(PokeDataContext)
    return (
        <>
        <h2>Fourms</h2>
        <pre>
        {pokeData && JSON.stringify(pokeData.forms, undefined, 2)}
        </pre>
        </>
    )
}