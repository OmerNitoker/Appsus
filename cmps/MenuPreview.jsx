
const { NavLink } = ReactRouterDOM

export function MenuPreview() {
    { console.log('Menu preview') }
    return (
        <nav className="header-menu">
            <NavLink to="/">
                <span className="material-symbols-outlined">
                    home
                </span>
            </NavLink>
            <NavLink to="/mail">
                <span className="material-symbols-outlined">
                    mail
                </span>
            </NavLink>
            <NavLink to="/note">
                <span className="material-symbols-outlined">
                    description
                </span>
            </NavLink>
            <NavLink to="/book">
                <span className="material-symbols-outlined">
                    menu_book
                </span>
            </NavLink>
        </nav>
    )
}