import { MailPreview } from "./MailPreview.jsx"
const { Link } = ReactRouterDOM

export function MailList({ mails }) {
    return (<div>

        <ul className="mail-list">
            {mails.map(mail =>
                <Link key={mail.id} to={`/mail/${mail.id}`}>
                    <li> <MailPreview mail={mail} />
                    </li>
                </Link>)}
        </ul>

    </div>
    )
}
