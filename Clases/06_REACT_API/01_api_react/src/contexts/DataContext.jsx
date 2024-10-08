import PropTypes from 'prop-types'

import { createContext, useState } from "react";

const DataContext = createContext();

const DataContextComponent = ({children}) => {

    const [datos, setDatos] = useState([])
    const [datos1, setDatos1] = useState([])
    const [datos2, setDatos2] = useState([])
    const [datos3, setDatos3] = useState([])
    const [datos4, setDatos4] = useState([])
    const [datos5, setDatos5] = useState([])

    const datosContexto={
        datos,
        setDatos,
        datos1,
        setDatos1,
        datos2,
        setDatos2,
        datos3,
        setDatos3,
        datos4,
        setDatos4,
        datos5,
        setDatos5
    }

    return (
        <DataContext.Provider value={datosContexto}>
            {children}
        </DataContext.Provider>
    )
}

DataContextComponent.propTypes = {
    children: PropTypes.node
}

export {
    DataContextComponent,
    DataContext   
};