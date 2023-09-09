import { utilService } from "../../../services/util.service.js"
export function MailPreview({ mail, onStar }) {

    // function getFormattedDate(date){
    //     const day = date.getDate()
    //    const month= utilService.getMonthName(date)
    //    return `${month} ${day}`
    // }
    function handleClickEvent(ev) {
        ev.preventDefault()
        console.log(ev)
        onStar(mail.id)
    }

    // function getTxtToShow(txt,length) {
    //     if (txt.length < length) return txt
    //     return txt.substring(0, length) + '...'
    //     }

    const mailRead = mail.isRead ? 'lighter' : ''
    const isStarred = mail.isStarred ? 'starred' : ' '
    return (
        <article className="mail-preview">
            <h6 className={"date " + mailRead}>{utilService.formatDate(mail.sentAt)}</h6>
            <h1 className={"from " + mailRead}>{mail.from}</h1>
            <h5 className={mailRead + ' subject'}>{mail.subject}</h5>
            <h5 className="mail-body">{mail.body}</h5>
            <span onClick={handleClickEvent} className={isStarred + ' star material-symbols-outlined'} title="Star / Unstar">
                star
            </span>
        </article>
    )
}