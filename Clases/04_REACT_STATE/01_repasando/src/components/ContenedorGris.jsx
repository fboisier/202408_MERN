import styles from  './ContenedorGris.module.css'

const ContenedorGris = ({children}) => {
    return (
        <div className={`${styles.main} p-4`}>
            {children}
        </div>
    )
}

export default ContenedorGris