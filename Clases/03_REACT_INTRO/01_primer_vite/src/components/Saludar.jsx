import InputText from "./InputText";

const Saludar = (props) => {
    const {nombre, apellido} = props;

    //JSX
    return (
        <>
            <h1 className="titulo">Saludar: {nombre} {apellido}</h1>
            <h1>Hola: {nombre}</h1>
            <InputText nombre={nombre}/>
        </>
    )
}

export default Saludar