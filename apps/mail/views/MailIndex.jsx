import { MailList } from "../cmps/MailList.jsx"
import { MailNav } from "../cmps/MailNav.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [mailsToShow, setMailsToShow] = useState('inbox')

    useEffect(() => {
        mailService.query(mailsToShow)
            // .then(res=>console.log(res))
            .then(setMails)
            .catch(err => console.log('err:', err))
    }, [mailsToShow])

    function onSetMailsToShow(mailsToShow) {
        setMailsToShow(mailsToShow)
    }
 

    if (!mails) return <div>Loading...</div>
    return (
        <div className="mail-index">

            <MailNav onSetMailsToShow={onSetMailsToShow} />
            <input placeholder="Search" className="search"></input>

            <section className="mails">
                <MailList mails={mails} ></MailList>
            </section>
        </div>
    )
}

