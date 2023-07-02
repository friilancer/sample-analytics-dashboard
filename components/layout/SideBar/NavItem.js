import Link from "next/link"
import styles from "../../../styles/Sidebar.module.css"

const NavItem = ({
    icon = "",
    text = "",
    href = "#",
    isActive= true
}) => {
    return (
        <li className={`${styles.navitem} ${isActive ? styles.navitem__active : ''}`}>
            <Link href={href}>
                <a>
                    <img src={`/assets/icons/${icon}`} alt="navigation icon" />
                    <span>
                        {text}
                    </span>
                </a>
            </Link>
        </li>
    )
}

export default NavItem