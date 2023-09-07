import { MailPreview } from "./MailPreview.jsx"
const { Link } = ReactRouterDOM

export function MailList({ mails, onStar }) {
    return (<div>

        <ul className="mail-list">
            {mails.map(mail =>
                <Link key={mail.id} to={`/mail/${mail.id}`}>
                    <li> <MailPreview mail={mail} onStar={onStar}/>
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
