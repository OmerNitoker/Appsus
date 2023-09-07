import { utilService } from "../../../services/util.service.js"
export function MailPreview({ mail, onStar }) {

    // function getFormattedDate(date){
    //     const day = date.getDate()
    //    const month= utilService.getMonthName(date)
    //    return `${month} ${day}`
    // }
    function handleClickEvent(ev) {
        ev.stopPropagation()
        onStar(mail.id)
    }
    const mailRead = mail.isRead ? 'read' : ''
    return (
        <article className="mail-preview">
            <h6 className={"date " + mailRead}>{mail.sentAt}</h6>
            <h1 className={mailRead}>{mail.subject}</h1>
            <h6 className="mail-body">{mail.body}</h6>
            <span onClick={handleClickEvent} className="star material-symbols-outlined">
                star
            </span>
        </article>
    )
}