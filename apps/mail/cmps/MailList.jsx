import { MailCompose } from "../views/MailCompose.jsx"
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
       
            <Link to="/mail/compose">
            <button className="compose">
                <span className="material-symbols-outlined">edit</span>
                <span>Compose</span>
                </button>
            </Link>
       
    </div>
    )
}
