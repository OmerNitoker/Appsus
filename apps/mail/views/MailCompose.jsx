import { mailService } from "../services/mail.service.js";
const { useNavigate } = ReactRouterDOM
const { useState } = React

export function MailCompose() {
    const [mailToCompose, setmailToCompose] = useState(mailService.getEmptyMail())
    const navigate = useNavigate()

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;

            case 'checkbox':
                value = target.checked
                break

            default:
                break;
        }

        setmailToCompose(prevMailToCompose => ({ ...prevMailToCompose, [field]: value }))
    }

    function onSendMail(ev) {

        ev.preventDefault()
        mailToCompose.sentAt = Date.now()
        console.log(mailToCompose)
        mailService.save(mailToCompose)
            .then(onBack)
            .catch(err => console.log('err:', err))

    }
    function onBack() {
        navigate('/mail')
        // navigate(-1)
    }

    const { to, from, subject, body } = mailToCompose
    return (
        <div className="mail-compose">
            <span onClick={onBack} className="material-symbols-outlined">close</span>
            <span onClick={onSendMail} className="material-symbols-outlined">
                send
            </span>
            <form className="compose">

                <input placeholder="To" onChange={handleChange} value={to} type="text" name="to"></input>
                <input placeholder="from" onChange={handleChange} value={from} type="text" name="from"></input>
                <input placeholder="subject" onChange={handleChange} value={subject} type="text" name="subject"></input>
                <input placeholder="body" onChange={handleChange} value={body} type="text" name="body"></input>


            </form>
        </div>


    )
}