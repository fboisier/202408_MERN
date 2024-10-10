import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AcercaDe = () => {

    const [respuesta, setRespuesta] = useState('');
    const navegate = useNavigate();


    const handleEnviar = () => {
        navegate('/resultados?nombre=javier#panchoID', { state: { respuesta } });
    }

    return (
        <div className="container mt-5">
            <div className="alert alert-success">
                <h2>Acerca de esta página</h2>
                <p>Esta es la página de acerca DE!</p>
                <div className="input-group mb-3">
                    <input 
                        value={respuesta} type="text" className="form-control"
                        placeholder="Ingresa tu texto" aria-label="Recipient's username" aria-describedby="button-addon2"
                        onChange={(e) => setRespuesta(e.target.value)}
                    />
                    <button 
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={handleEnviar}
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AcercaDe