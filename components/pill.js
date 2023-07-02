import styles from '../styles/Pills.module.css'

const Pill = ({
    text = '',
    isActive = false,
    onClick = () => {}
}) => {
    return (
        <button className={`${styles.pill} ${isActive ? styles.pill__active : ''}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Pill;