import { MailList } from "../cmps/MailList.jsx"
import { MailNav } from "../cmps/MailNav.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [mailsToShow, setMailsToShow] = useState({ folder: 'inbox' })
    const [isUnread, setIsUnread] = useState(false)

    useEffect(() => {
        console.log(isUnread)
        mailService.query(mailsToShow)
            // .then(res=>console.log(res))
            .then(setMails)
            .catch(err => console.log('err:', err))
    }, [mailsToShow])

    function onSetMailsToShow(field, fiterBy) {
        if (field === 'isUnread') setIsUnread(!isUnread)
        setMailsToShow(prevMailsToShow => ({ ...prevMailsToShow, [field]: fiterBy }))
    }
    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        onSetMailsToShow(field, value)
    }
    // onStar('e101')
    function onStar(mailId) {
        console.log('hi')
        mailService.star(mailId)
        // mailService.get(mailId)
            // .then(res => console.log(res))

    }
    if (!mails) return <div>Loading...</div>
    const active = isUnread ? 'active' : ''
    return (
        <div className="mail-index">

            <MailNav onSetMailsToShow={onSetMailsToShow} />
            <button onClick={() => onSetMailsToShow('isUnread', !isUnread)} className={'is-unread ' + active}>Is unread</button>
            <select className="sort" name="sortBy" id="date" onChange={handleChange}>
                <option value="">Sort by</option>
                <option value="date">Date</option>
                <option value="subject">Subject</option>

                {/* <option value="3">3</option> */}
            </select>

            <input onChange={handleChange} name="txt" placeholder="Search" className="search"></input>


            <section className="mails">
                <MailList mails={mails} onStar={onStar}></MailList>
            </section>
        </div>
    )
}

