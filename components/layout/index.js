import SideBar from "./SideBar";
import styles from  '../../styles/Layout.module.css'
import { useState, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";


const Layout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const innerWidth = useWindowWidth()

    useEffect(() => {
        if (innerWidth > 768) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [innerWidth])
    
    return (
        <div className={styles.layout}>
            <div className={styles.layout__header}>
                <img className={styles.layout__logo}  src="/assets/icons/logo.png" alt="Logo" />
                <img className={styles.layout__toggle} src="/assets/icons/hamburger.png" alt="Toggle" onClick={() => setIsOpen(!isOpen)} />
            </div>
            <SideBar isOpen={isOpen}/>
            <main>{children}</main>
        </div>
    )
}

export default Layout