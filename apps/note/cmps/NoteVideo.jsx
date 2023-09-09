
export function NoteVideo({note}) {
    return (
        <video controls muted src={note.info.url} />
    )
}