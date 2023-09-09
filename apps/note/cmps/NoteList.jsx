import { NotePreview } from "./NotePreview.jsx"
const { useState } = React


export function NoteList({ notes, onRemoveNote, onTogglePin }) {

    const [showColorPicker, setShowColorPicker] = useState(false)


    // const pinnedNotes = notes.filter(note => note.isPinned);
    // const unpinnedNotes = notes.filter(note => !note.isPinned)
    // console.log('pinned:', pinnedNotes)
    // console.log('unpinned:', unpinnedNotes)
    console.log('notes before render:' , notes)
    return (
        <ul className='notes-container'>
            {notes.map(note => (
                <li className="note" style={{backgroundColor: note.style.backgroundColor}} key={note.id}>
                    <NotePreview note={note} />
                    <section>
                       {showColorPicker && <input type="color" name="color-picker" onChange={(event)} />}
                        <span className="material-symbols-outlined" onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)} >
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
