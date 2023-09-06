// note service

import { utilService  } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js"

const NOTES_KEY = 'notesDB'
var gFilterBy = { txt: '', type: '', pinned: false }
_createNotes()

function query(filterBy) {
    return storageService.query(NOTES_KEY).then(notes => {
      if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        notes = books.filter(book => regex.test(book.title))
      }
      if (filterBy.price) {
        books = books.filter(book => book.listPrice.amount >= filterBy.price)
      }
      if (filterBy.publishedDate) {
        books = books.filter(book => book.publishedDate >= filterBy.publishedDate)
      }
      return books
    })
  }
  