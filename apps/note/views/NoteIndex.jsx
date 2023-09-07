import { NoteFilter } from "../cmps/NoteFilter.jsx"
import { NoteList } from "../cmps/NoteList.jsx"
import { noteService } from "../services/note.service.js"
import { NoteAddBar } from "../cmps/NoteAddBar.jsx"

const { useState, useEffect } = React
const { Link } = ReactRouterDOM

export function NoteIndex() {

    const [notes, setNotes] = useState(null)
    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    

    useEffect(() => {
        noteService.query(filterBy).then(notes => {
            setNotes(notes)
        })
    }, [filterBy])

    function onRemoveNote(noteId) {
        noteService.remove(noteId)
            .then(() => {
                setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
                // showSuccessMsg(`Book Removed! ${bookId}`)
            })
            .catch(err => {
                console.error(err)
                // showErrorMsg(`Problem Removing ${noteId}`)
            })
    }

    function onSetFilterBy(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    if (!notes) return <div>Loading...</div>

    return (
        <section className='note-index'>
            <NoteFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
            <NoteList notes={notes} onRemoveNote={onRemoveNote} />
            <NoteAddBar />
        </section>
    )
}
