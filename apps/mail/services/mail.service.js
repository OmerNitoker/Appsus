// mail service
import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"
const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    getUser,
    getEmptyMail,
    save,
    remove,
    getUnreadCount,
    star
}

function star(mailId) {
    return get(mailId)
        .then(mail => {
            mail.isStarred = true
            save(mail)
            console.log(mail)
        })

}
function getUnreadCount() {
    return mailService.query('inbox')
        .then(mails => {
            const userMail = getUser().email
            const unReadMails = mails.filter(mail => mail.to === userMail && !mail.isRead)
            return unReadMails.length
        })
}

function remove(mailId) {
    return get(mailId)
        .then(mail => {
            if (!mail.removedAt) {
                mail.removedAt = Date.now()
                save(mail)
            } else storageService.remove(MAIL_KEY, mailId)
        })
}

function getEmptyMail() {
    return {
        subject: '',
        body: '',
        isRead: true,
        sentAt: 1551133930594,
        removedAt: null,
        from: getUser().email,
        to: '',
        isStarred: false
    }
}
function getUser() {
    const loggedinUser = {
        email: 'user@appsus.com',
        fullname: 'Mahatma Appsus'
    }
    return loggedinUser
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function query(mailsToShow) {
    console.log(mailsToShow)
    return storageService.query(MAIL_KEY)
        .then(mails => {
            // console.log(mails)
            const userMail = getUser().email
            if (mailsToShow.folder === 'trash') {
                mails = mails.filter(mail => mail.removedAt)
            } else if (mailsToShow.folder === 'inbox') {
                mails = mails.filter(mail => mail.to === userMail && !mail.removedAt)
            } else if (mailsToShow.folder === 'sent') {
                mails = mails.filter(mail => mail.from === userMail && !mail.removedAt)
            }
            if (mailsToShow.txt) {
                const regExp = new RegExp(mailsToShow.txt, 'i')
                mails = mails.filter(mail => regExp.test(mail.subject))
            }
            if (mailsToShow.isUnread) {
                mails = mails.filter(mail => !mail.isRead)
            }
            // else if (!mailsToShow.isRead) {
            //     // console.log('hi')
            //     mails = mails.filter(mail => !mail.isRead)
            // }

            if (mailsToShow.sortBy === 'date') {
                mails = mails.sort((mail1, mail2) => mail1.sentAt - mail2.sentAt)
            } else if (mailsToShow.sortBy === 'subject') {
                mails = mails.sort((mail1, mail2) => mail1.subject.localeCompare(mail2.subject))
            }
            // console.log(mails)
            return mails
        })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
        .then(mail => {
            mail.isRead = true
            save(mail)
            mail = _setNextPrevMailId(mail)
            return mail
        })
}
function _setNextPrevMailId(mail) {
    return storageService.query(MAIL_KEY).then((mails) => {
        const mailIdx = mails.findIndex((currMail) => currMail.id === mail.id)
        const nextMail = mails[mailIdx + 1] ? mails[mailIdx + 1] : mails[0]
        const prevMail = mails[mailIdx - 1] ? mails[mailIdx - 1] : mails[mails.length - 1]
        mail.nextMailId = nextMail.id
        mail.prevMailId = prevMail.id
        return mail
    })
}
function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [{
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: true,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'momo@momo.com',
            to: 'user@appsus.com',
            isStarred: false
        },
        {
            id: 'e102',
            subject: 'Delivery Update',
            body: 'Order 3025323788890605 has a delivery update. You can view the shipping status below',
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'momo@momo.com',
            to: 'user@appsus.com',
            isStarred: false
        },
        {
            id: 'e103',
            subject: 'Thank you for buying our product',
            body: 'Receipt number 31904, View your order',
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'momo@momo.com',
            to: 'user@appsus.com',
            isStarred: false
        }


        ]
        utilService.saveToStorage(MAIL_KEY, mails)
    }
}