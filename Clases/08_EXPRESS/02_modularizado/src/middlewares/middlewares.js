
const consoleLog = (req, res, next) => {
    console.log('Solicitud recibida:', req.method, req.url);
    next();
}

const validarUsuarios = (req, res, next) => {
    
    console.log(req.body);

    let error = [];

    if (!req.body.id)
        error.push('Falta el campo id');

    if (!req.body.nombre)
        error.push('Falta el campo nombre');

    if (error.length > 0)
        return res.status(400).json({error});

    next();
}

export { consoleLog, validarUsuarios };