
export function NoteTodos( {note} ) {
    return (
        <section>
        <h3>{note.info.title}</h3>
        <ul>
            {note.info.todos.map(todo => <li key={todo.todoId}>{todo.txt}</li>)}
        </ul>
        </section>
    )
}