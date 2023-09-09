
export function Icons({setNoteType , noteType}) {

    return (
        <section className="type-icons">
            <span className={"material-symbols-outlined" + (noteType === 'txt' ? ' selected-icon' : '')} onClick ={() => setNoteType('NoteTxt')}>
                text_fields
            </span>
            <span className={"material-symbols-outlined" + (noteType === 'img' ? ' selected-icon' : '')} onClick ={() => setNoteType('NoteImg')}>
                image
            </span>
            <span className={"material-symbols-outlined" + (noteType === 'video' ? ' selected-icon' : '')} onClick ={() => setNoteType('NoteVideo')}>
                videocam
            </span>
            <span className={"material-symbols-outlined" + (noteType === 'audio' ? ' selected-icon' : '')} onClick ={() => setNoteType('NoteAudio')}>
                mic
            </span>
            <span className={"material-symbols-outlined" + (noteType === 'todo' ? ' selected-icon' : '')} onClick ={() => setNoteType('Notetodos')}>
                format_list_bulleted
            </span>
        </section>
    )
}