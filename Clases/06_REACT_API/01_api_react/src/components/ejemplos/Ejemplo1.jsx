import { useContext, useEffect } from "react"
import Ejemplo2 from "./Ejemplo2"
import { DataContext } from "../../contexts/DataContext"

const Ejemplo1 = () => {

    const {setDatos3} = useContext(DataContext)

    useEffect(() => {
        setDatos3({
            title: 'Hola'
        })
    }, [])

    return (
        <div>
            <Ejemplo2 />
        </div>
    )
}

export default Ejemplo1