import PropTypes from 'prop-types'

import { createContext, useState } from "react";

const UsuarioContext = createContext();

const UsuarioContextComponent = ({children}) => {

    const [usuario, setUsuario] = useState({})
    const [permisos, setPermisos] = useState({})

    const datosContexto={
        usuario,
        setUsuario,
        permisos,
        setPermisos
    }

    return (
        <UsuarioContext.Provider value={datosContexto}>
            {children}
        </UsuarioContext.Provider>
    )
}

UsuarioContextComponent.propTypes = {
    children: PropTypes.node
}

export {
    UsuarioContextComponent,
    UsuarioContext   
};