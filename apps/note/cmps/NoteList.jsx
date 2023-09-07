import { NotePreview } from "./NotePreview.jsx"
const { Link } = ReactRouterDOM
const { useState } = React


export function NoteList({ notes, onRemoveNote, onTogglePin }) {

    // const [pinned, setPinned] = useState([])

    // const pinnedNotes = notes.filter(note => note.isPinned);
    // const unpinnedNotes = notes.filter(note => !note.isPinned)
    // console.log('pinned:', pinnedNotes)
    // console.log('unpinned:', unpinnedNotes)
    console.log('note1:', notes)

    return (
        <ul className='list-notes'>
            {notes.map(note => (
                <li key={note.id}>
                    <NotePreview note={note} />
                    <section>
                        <span className="material-symbols-outlined">
                            palette
                        </span>
                        <span className="material-symbols-outlined" onClick={() => onTogglePin(note.id)}>
                            push_pin
                        </span>
                        <span className="material-symbols-outlined">
                            edit_note
                        </span>
                        <span className="material-symbols-outlined" onClick={() => onRemoveNote(note.id)}>
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
{/* <ul className='unpinned-notes'>
                {unpinnedNotes.map(note => (
                    <li key={note.id}>
                        <NotePreview note={note} />
                        <section>
                            <span className="material-symbols-outlined">
                                palette
                            </span>
                            <span className="material-symbols-outlined" onClick={() => onTogglePin(note.id)}>
                                push_pin
                            </span>
                            <span className="material-symbols-outlined">
                                edit_note
                            </span>
                            <span className="material-symbols-outlined" onClick={() => onRemoveNote(note.id)}>
                                delete
                            </span>
                            <span className="material-symbols-outlined">
                                outgoing_mail
                            </span>
                        </section>
                    </li>
                ))}
            </ul>
        </section> */}
