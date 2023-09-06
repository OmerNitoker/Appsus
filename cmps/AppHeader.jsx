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
        <span className="material-symbols-outlined menu-header-btn" style={{ cursor: 'pointer' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            apps
            <div className="menu-header">
            {isMenuOpen && <MenuPreview />}
        </div>
        </span>
    </header>
    )
}
