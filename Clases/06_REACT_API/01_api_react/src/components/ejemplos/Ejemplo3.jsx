import { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'

const Ejemplo3 = () => {

    const {datos, datos3} = useContext(DataContext)

    return (
        <div>
            <h3>Datos 3: {datos3.title}</h3>
            <div className="row">
                <ul>
                    {datos.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Ejemplo3