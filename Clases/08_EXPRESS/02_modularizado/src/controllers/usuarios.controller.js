
let usuarios = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'Pedro' },
    { id: 3, nombre: 'Pablo' }
]

const getUsuarios = (req, res) => {

    const {nombre} = req.query;

    const resultadoUsuarios = nombre ? usuarios.filter((usuario) => usuario.nombre.includes(nombre)) : usuarios;

    res.json({
        usuarios:  resultadoUsuarios
    });
}

const postUsuarios = (req, res) => {

    const cuerpo = req.body;

    const esta = usuarios.find((usuario) => usuario.id == req.body.id);

    if (esta) {
        return res.status(400).json({
            error: ['El usuario ya existe']
        });
    }

    usuarios.push(cuerpo);

    res.status(201).json({
        mensaje: 'Usuario creado',
        cuerpo: cuerpo
    });
}

const putUsuarios = (req, res) => {
    const id = req.params.id;
    const cuerpo = req.body;

    usuarios.forEach((usuario, i) => {
        if (usuario.id == id) {
            usuarios[i] = cuerpo;
        }
    });

    res.json({
        mensaje: 'Usuario actualizado',
        cuerpo: cuerpo
    });
}

const getDetalleUsuario =  (req, res) => {
    const id = req.params.id;
    
    const usuario = usuarios.find((usuario) => usuario.id == id);

    res.json({
        usuario: usuario
    });
}

const deleteUsuario =  (req, res) => {
    const id = req.params.id;
    
    usuarios = usuarios.filter((usuario) => usuario.id != id);

    res.json({
        mensaje: 'Usuario eliminado',
    });
}

export { getUsuarios, postUsuarios, putUsuarios, getDetalleUsuario, deleteUsuario };