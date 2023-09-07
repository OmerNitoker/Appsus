const { useState } = React

export function MailNav() {
    const [isOn, setIsOn] = useState(false)

    return (
        <div className="mail-nav">
            <nav onClick={() => setIsOn(!isOn)} className="material-symbols-outlined">menu</nav>
            {isOn && <section className="mail-nav-content">
                <div>
                    <span className="material-symbols-outlined">inbox</span>
                    <h5>Inbox</h5>
                </div>

                <h2>Starred</h2>
                <h2>Sent</h2>
                <h2>Draft</h2>
                <h2>Trash</h2>
            </section>}
        </div>
    )
}