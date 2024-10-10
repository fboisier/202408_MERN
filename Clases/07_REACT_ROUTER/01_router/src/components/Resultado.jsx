import { useLocation } from "react-router-dom";

const Resultado = () => {

    const {state, hash, search} = useLocation();
    const { respuesta } = state || {};

    return (
        <div className="container mt-5">
            <div className="alert alert-secondary">
                <h2>Resultados</h2>
                <p>El texto que llego en el estado de respuesta es: {respuesta}</p>
                <p>El hash es: {hash}</p>
                <p>El search es: {search}</p>
            </div>
        </div>
    )
}

export default Resultado