
export function NoteImg({ note }) {
    const url = note.info.url
    return (
        <section>
            {/* <img src={note.info.url}/> */}
            <img
                // src= 'https://images.app.goo.gl/FVSXwbGuLGWRZvWW6'
                src= {url}
                // src= 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
                alt="new"
            />
            <h3>{note.info.title}</h3>
        </section>
    )
}