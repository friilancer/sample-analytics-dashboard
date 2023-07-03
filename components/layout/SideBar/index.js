import { useState } from "react"
import NavGroup from "./NavGroup"
import styles from "../../../styles/Sidebar.module.css"

const SideBar = ({
    isOpen = false,
    userName = "Blessing Daniels",
    userAvatar = "/assets/images/avatar.png"
}) => {
    const [active, setActive] = useState("Dashboard")
    const navItems = {
        main : {
            title: "",
            items: [
                {
                    icon: "dashboard.png",
                    text: "Dashboard",
                },
                {
                    icon: "edit.png",
                    text: "Item 1",
                },
                {
                    icon: "group.png",
                    text: "Item 2",
                },
                {
                    icon: "hourglass_empty.png",
                    text: "Item 3",
                },
            ]
        },
        primary: {
            title: "Others 1",
            items: [
                {
                    icon: "add_a_photo.png",
                    text: "Item 4"
                },
                {
                    icon: "delete.png",
                    text: "Item 5"
                }
            ]
        },
        secondary: {
            title: "Others 2",
            items: [
                {
                    icon: "subscriptions.png",
                    text: "Item 6"
                },
                {
                    icon: "file_present.png",
                    text: "Item 7"
                },
                {
                    icon: "alarm.png",
                    text: "Item 8"
                }
            ]
        }
    }

    return (
        <aside className={`${styles.sidebar} ${isOpen ? styles.sidebar__open : ''}`}>
            <div className={styles.sidebar__header}>
                <img className={styles.sidebar__logo}  src="/assets/icons/logo.png" alt="Logo" />
            </div>  
            <div className={styles.sidebar__main}>
                <div className={styles.sidebar__menu}>
                    {
                        Object.values(navItems).map(({title, items}, index) => {
                            return (
                                <NavGroup
                                    key={index}
                                    title={title}
                                    items={items}
                                    activeTile={active}
                                />
                            )
                        })
                    }
                </div>
                <div className={styles.sidebar__footer}>
                    <div>
                        <img src={userAvatar} className={styles.footer__avatar}/>
                        <span className={styles.footer__text}>{userName}</span>
                    </div>
                    <img src="/assets/icons/more.png" className={styles.footer__icon} />
                </div>
            </div>
        </aside>
    )
}

export default SideBar