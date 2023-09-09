const { useState } = React

const { Link } = ReactRouterDOM

import { MenuPreview } from "./MenuPreview.jsx"

export function AppHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="app-header">
            <Link to="/">
                <h3>Appsus!</h3>
            </Link>
            <div>
            <span className="material-symbols-outlined selected-icon menu-header-btn" style={{ cursor: 'pointer' }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                apps
            </span>
            <div className="menu-header">
                {isMenuOpen && <MenuPreview />}
            </div>
                    </div>
        </header>
    )
}
