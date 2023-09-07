const { useState, useEffect } = React

export function NoteFilter({ filterBy, onSetFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break

            case 'checkbox':
                value = target.checked
                break

            default:
                break
        }

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilterBy(filterByToEdit)
    }

    const { txt, type, pinned } = filterByToEdit

    return (
        <section>
            <form className="note-filter flex justify-center" onSubmit={onSubmitFilter}>
                <select name="type" id="type-select" onChange={handleChange}>
                    <option value="">Filter by note type...</option>
                    <option value="txt">Text</option>
                    <option value="img">Image</option>
                    <option value="vid">Video</option>
                    <option value="list">List</option>
                </select>

                <input value={txt} onChange={handleChange} type='text' placeholder='Search note' id='txt' name='txt' />
                <div>
                <label htmlFor="pin">Pinned</label>
                <input type="checkbox" id="pin" name="pinned" value="pin" onChange={handleChange} />
                </div>
            </form>
        </section>
    )
}

