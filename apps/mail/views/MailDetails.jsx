import { mailService } from "../services/mail.service.js";

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

    if (!mail) return <div>Loading...</div>
    return (
        <section className="mail-details">
            <span onClick={onBack} className="material-symbols-outlined">
                arrow_back_ios
            </span>
            <h1>{mail.subject}</h1>
            <h1>{mail.from}</h1>
            <h1>{mail.sentAt}</h1>
            <h1>{mail.body}</h1>
        </section>
    )
}