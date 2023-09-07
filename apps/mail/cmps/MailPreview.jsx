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

    function getTxtToShow(txt,length) {
        if (txt.length < length) return txt
        return txt.substring(0, length) + '...'
        }
      
    const mailRead = mail.isRead ? 'lighter' : ''
    return (
        <article className="mail-preview">
            <h6 className={"date " + mailRead}>{mail.sentAt}</h6>
            <h1 className={"from " +mailRead}>{mail.from}</h1>
            <h1 className={mailRead+ ' subject'}>{getTxtToShow(mail.subject,18)}</h1>
            <h6 className="mail-body">{getTxtToShow(mail.body,100)}</h6>
            <span onClick={handleClickEvent} className="star material-symbols-outlined">
                star
            </span>
        </article>
    )
}