const InputText = ({ nombre }) => {

    const nombreComponenteID = `inputText_${nombre}`


    //JSX
    return (
        <div>
            <label htmlFor={nombreComponenteID}>Ingresa el Texto:</label>
            <input id={nombreComponenteID} type="text" />
        </div>
    )
}

export default InputText