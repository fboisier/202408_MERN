import { useParams } from "react-router-dom"

const Pancho = () => {

    const { identificador } = useParams()

    return (
        <div className="container mt-5">
            <div className="alert alert-warning">
                <h2>PANCHO</h2>
                <p>El identificador es: {identificador}</p>
            </div>
        </div>
    )
}

export default Pancho