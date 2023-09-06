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
        <span className="material-symbols-outlined" style={{ cursor: 'pointer' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            apps
        </span>
        {console.log(isMenuOpen)}
        <div>
            {isMenuOpen && <MenuPreview />}
        </div>


    </header>
    )
}
