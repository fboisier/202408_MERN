import styles from './MiTarjeta.module.css';

const MiTarjeta = () => {
    return (
        <div className={`${styles.tarjeta} d-print-none`}>
            <h2>Título de la Tarjeta</h2>
            <p>Este es el contenido de la tarjeta.</p>
        </div>
    );
}

export default MiTarjeta;