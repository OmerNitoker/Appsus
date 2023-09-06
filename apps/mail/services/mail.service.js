// mail service
import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/async-storage.service.js"
const MAIL_KEY= 'mailDB'
_createMails()

export const mailService={
    query
}

function query(){
return storageService.query(MAIL_KEY)

}

function _createMails(){
let mails = utilService.loadFromStorage(MAIL_KEY)
if (!mails || !mails.length){
    mails = [{
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e102',
        subject: 'Delivery Update',
        body: 'Order 3025323788890605 has a delivery update. You can view the shipping status below',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    },
    {
        id: 'e103',
        subject: 'Thank you for buying our product',
        body: 'Receipt number 31904, View your order',
        isRead: false,
        sentAt: 1551133930594,
        removedAt: null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }
    
    
    ]
    utilService.saveToStorage(MAIL_KEY,mails)
}
}