import SideBar from "./SideBar";
import styles from  '../../styles/Layout.module.css'


const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <SideBar/>
            <main>{children}</main>
        </div>
    )
}

export default Layout