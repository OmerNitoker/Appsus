
export function NoteVideo({note}) {
    return (
        // <video controls muted src={note.info.url} />
        <iframe src="https://www.youtube.com/watch?v=xNRJwmlRBNU" frameborder="0"></iframe>
    )
}