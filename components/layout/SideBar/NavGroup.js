import NavItem from "./NavItem"

const NavGroup = ({ items }) => {
    return (
        <nav>
            <ul>
                {
                    items.map(item => {
                        return (
                            <NavItem
                                icon={item.icon}
                                text={item.text}
                            />
                        )
                    })
                }
            </ul>
        </nav>
    )
}