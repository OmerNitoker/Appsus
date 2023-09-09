// import { noteService } from '../services/note.service.js'
// import { AddTypeMenu } from './AddTypeMenu.jsx'
import { Icons } from './Icons.jsx'
import { AddTxt } from '../views/AddTxt.jsx'
import {AddImg} from '../views/AddImg.jsx'
import {AddVideo} from '../views/AddVideo.jsx'
import {AddList} from '../views/AddList.jsx'
import {AddAudio} from '../views/AddAudio.jsx'

const { useState } = React

export function NoteAddBar({onSetNotes}) {
    const [noteType, setNoteType] = useState('txt')


    return (
        <section className="add-bar flex">
            <div className="type-to-add">
            {noteType === 'txt' && <AddTxt onSetNotes={onSetNotes}/>}
            {noteType === 'img' && <AddImg onSetNotes={onSetNotes} />}
            {noteType === 'video' && <AddVideo />}
            {noteType === 'todo' && <AddList onSetNotes={onSetNotes}/>}
            {noteType === 'audio' && <AddAudio />}
            </div>
            <Icons setNoteType={setNoteType} noteType = {noteType} />
        </section>

    )
}