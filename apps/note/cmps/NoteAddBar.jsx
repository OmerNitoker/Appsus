import { noteService } from '../services/note.service.js'
import { AddTypeMenu } from './AddTypeMenu.jsx'

const { useState, useEffect } = React

export function NoteAddBar() {

    const [isPlusOn, setIsPlusOn] = useState(false)


    return (
        <section className="add-bar">
            {isPlusOn && <AddTypeMenu />}
            <span className="material-symbols-outlined" onClick={() => setIsPlusOn(!isPlusOn)}>
                add_circle
            </span>
        </section>
    )
}