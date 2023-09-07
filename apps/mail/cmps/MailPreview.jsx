export function MailPreview({ mail }) {
    const mailRead = mail.isRead ? 'read' : ''
    return (
        <article className="mail-preview">
            <h6 className={"date " + mailRead}>{mail.sentAt}</h6>
            <h1 className={mailRead}>{mail.subject}</h1>
            <h6 className="mail-body">{mail.body}</h6>
            <span className="star material-symbols-outlined">
                star
            </span>
        </article>
    )
}