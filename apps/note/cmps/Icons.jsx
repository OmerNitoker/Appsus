
export function Icons({setNoteType , noteType}) {

    return (
        <section className="type-icons">
            <span className={"material-symbols-outlined" + (noteType === 'txt' ? ' selected-icon' : '')} onClick ={() => setNoteType('txt')}>
                text_fields
            </span>
            <span className={"material-symbols-outlined" + (noteType === 'img' ? ' selected-icon' : '')} onClick ={() => setNoteType('img')}>
                image
            </span>
            <span className={"material-symbols-outlined" + (noteType === 'video' ? ' selected-icon' : '')} onClick ={() => setNoteType('video')}>
                videocam
            </span>
            <span className={"material-symbols-outlined" + (noteType === 'audio' ? ' selected-icon' : '')} onClick ={() => setNoteType('audio')}>
                mic
            </span>
            <span className={"material-symbols-outlined" + (noteType === 'todo' ? ' selected-icon' : '')} onClick ={() => setNoteType('todo')}>
                format_list_bulleted
            </span>
        </section>
    )
}