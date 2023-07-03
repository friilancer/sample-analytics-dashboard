import styles from '../styles/Pills.module.css'

const Pill = ({
    id = "",
    text = "",
    isActive = false,
    onClick = () => {}
}) => {
    return (
        <button key={id} className={`${styles.pill} ${isActive ? styles.pill__active : ''}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Pill;