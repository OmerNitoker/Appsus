const { useState } = React

export function MailNav() {
    const [isOn, setIsOn] = useState(false)

    return (
        <div>
            <nav onClick={()=>setIsOn(!isOn)} className="material-symbols-outlined">menu</nav>
            {isOn && <section className="mail-nav-content">
                <h2>Inbox</h2>
                <h2>Starred</h2>
                <h2>Sent</h2>
                <h2>Draft</h2>
                <h2>Trash</h2>
            </section>}
        </div>
    )
}