
export function NoteImg({ note }) {
    {console.log(note.info.url)}
    return (
        <section>
        <h3>{note.info.title}</h3>
        <img src={note.info.url}/>
        </section>
    )
}