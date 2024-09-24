const Container = ({children, opcion=""}) => {

    const opcionFinal = opcion === "" ? "container" : "container-fluid";

    return (
        <div className={`${opcionFinal} mt-3`}>
            {children}
        </div>
    )
}

export default Container