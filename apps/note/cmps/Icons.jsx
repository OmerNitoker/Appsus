
export function Icons({setNoteType}) {

    return (
        <section className="type-icons">
            <span className="material-symbols-outlined" onClick ={() => setNoteType('txt')}>
                text_fields
            </span>
            <span className="material-symbols-outlined" onClick ={() => setNoteType('img')}>
                image
            </span>
            <span className="material-symbols-outlined" onClick ={() => setNoteType('video')}>
                videocam
            </span>
            <span className="material-symbols-outlined" onClick ={() => setNoteType('audio')}>
                mic
            </span>
            <span className="material-symbols-outlined" onClick ={() => setNoteType('todo')}>
                format_list_bulleted
            </span>
        </section>
    )
}