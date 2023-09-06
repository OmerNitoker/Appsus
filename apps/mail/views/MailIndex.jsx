import { MailList } from "../cmps/MailList.jsx"
import { MailNav } from "../cmps/MailNav.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)

    useEffect(() => {
        mailService.query()
        // .then(res=>console.log(res))
            .then(setMails)
            .catch(err => console.log('err:', err))
    }, [])

    if (!mails) return <div>Loading...</div>
    return (
        <div className="mail-index">
            
                <MailNav></MailNav>
                <input className="search"></input>
            
            <section className="mail-list">
                <MailList mails={mails}></MailList>
            </section>
        </div>
    )
}

