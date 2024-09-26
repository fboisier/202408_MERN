const Usuario = ({usuario}) => {
  return (
    <p>
        Usuario: {usuario?.nombre || 'No hay usuario'}
    </p>
  )
}

export default Usuario