import SideBar from "./SideBar";


const Layout = ({children}) => {
    return (
        <div className="layout">
            <SideBar/>
            <main>{children}</main>
        </div>
    )
}

export default Layout