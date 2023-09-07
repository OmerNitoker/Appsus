import { NotePreview } from "./NotePreview.jsx"
const { Link } = ReactRouterDOM

export function NoteList({ notes, onRemoveNote }) {

    return (
        <ul className='note-list'>
            {notes.map(note => (
                <li key={note.id}>
                    <NotePreview note={note} />
                    <section>
                        <span className="material-symbols-outlined">
                            palette
                        </span>
                        <span className="material-symbols-outlined">
                            push_pin
                        </span>
                        <span className="material-symbols-outlined">
                            edit_note
                        </span>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                        <span className="material-symbols-outlined">
                            outgoing_mail
                        </span>
                    </section>
                </li>
            ))}
        </ul>
    )
}
