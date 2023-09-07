const { NavLink } = ReactRouterDOM

export function AddTypeMenu() {
    return (
        <section className="add-type-bar">
            <NavLink to="/add-txt">
            <span className="material-symbols-outlined">
                text_fields
            </span>
            </NavLink>
            <NavLink to="/add-img">
            <span className="material-symbols-outlined">
                image
            </span>
            </NavLink>
            <NavLink to="/add-video">
            <span className="material-symbols-outlined">
                videocam
            </span>
            </NavLink>
            <NavLink to="/add-audio">
            <span className="material-symbols-outlined">
                mic
            </span>
            </NavLink>
            <NavLink to="/add-list">
            <span className="material-symbols-outlined">
                format_list_bulleted
            </span>
            </NavLink>
        </section>
    )
}