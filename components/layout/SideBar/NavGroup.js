import NavItem from "./NavItem"
import styles from "../../../styles/Sidebar.module.css"
import { Fragment } from "react"

const NavGroup = ({ items = [], title = "", activeTile = "Dashboard" }) => {
    return (
        <nav className={styles.nav}>
            {title ? <h6 className={styles.nav__header}>{title}</h6> : null}
            <ul>
                {
                    items.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <NavItem
                                    key={index}
                                    isActive={item.text === activeTile}
                                    icon={item.icon}
                                    text={item.text}
                                />
                            </Fragment>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default NavGroup