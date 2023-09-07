export function MailPreview({ mail }) {
    return (
        <article className="mail-preview">
            <h6 className={"date " +(mail.isRead?'':'read')}>{mail.sentAt}</h6>
            <h1 className={mail.isRead?'':'read'}>{mail.subject}</h1>
            <h6 className="mail-body">{mail.body}</h6>
            <span className="star material-symbols-outlined">
                star
            </span>
        </article>
    )
}