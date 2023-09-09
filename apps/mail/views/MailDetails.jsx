import { mailService } from "../services/mail.service.js";
import { utilService } from "../../../services/util.service.js";

const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, [params.mailId])

    function loadMail() {
        mailService.get(params.mailId)
            .then(setMail)
            .catch(err => {
                console.log('err:', err)
                navigate('/mail')
            })
    }


    function onBack() {
        navigate('/mail')
        // navigate(-1)
    }

    function onRemoveMail() {
        mailService.remove(params.mailId)
            .then(onBack)

    }

    function onStar(mailId) {
        mailService.star(mailId)
    }

    if (!mail) return <div>Loading...</div>
    const isStarred = mail.isStarred ? 'starred' : ' '
    return (
        <section className="mail-details">
            <span onClick={onBack} className="material-symbols-outlined">
                arrow_back_ios
            </span>
            <div className="options">
                <span onClick={onRemoveMail} className="material-symbols-outlined">
                    delete
                </span>
                <span onClick={()=>onStar(mail.id)} className={isStarred + ' star material-symbols-outlined'}>
                    star
                </span>
            </div>
            <h2 className="subject">{mail.subject}</h2>
            <h5 className="from">{mail.from}</h5>
            <h5 className="time">{utilService.formatDate(mail.sentAt)}</h5>
            <h4 className="mail-body">{mail.body}</h4>
        </section>
    )
}