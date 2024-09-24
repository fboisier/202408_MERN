
const Tarjeta = ({titulo, subtitulo, correo, children}) => {
    return (
        <>
            <div className="card m-2 p-2">
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{subtitulo}</h6>
                    <div className="card-text">
                        {children}
                    </div>
                    <p className="card-text">{correo}</p>
                </div>
            </div>
        </>
    )
}

export default Tarjeta