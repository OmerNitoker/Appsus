const { useState } = React

export function MailNav({onSetMailsToShow}) {
    const [isOn, setIsOn] = useState(false)

function onShowMails(mailsToshow){
    setIsOn(!isOn)
    onSetMailsToShow(mailsToshow)
}

    return (
        <div className="mail-nav">
            <nav onClick={() => setIsOn(!isOn)} className="material-symbols-outlined">menu</nav>
            {isOn && <section className="mail-nav-content">
                <div onClick={()=>onShowMails('inbox')}>
                    <span className="material-symbols-outlined">inbox</span>
                    <h5>Inbox</h5>
                </div>

                <h2>Starred</h2>
                <h2 onClick={()=>onShowMails('sent')}>Sent</h2>
                <h2>Draft</h2>
                <h2 onClick={()=>onShowMails('trash')}>Trash</h2>
            </section>}
        </div>
    )
}