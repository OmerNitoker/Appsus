// note service

import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js"

export const noteService = {
    query,
    get,
    remove,
    save,
    getFilterBy,
    setFilterBy,
    getDefaultFilter,
  }

const NOTES_KEY = 'notesDB'
var gFilterBy = { txt: '', type: '', pinned: false }
_createNotes()

function query(filterBy) {
    return storageService.query(NOTES_KEY).then(notes => {
        if (filterBy.txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            notes = notes.filter(note => regex.test(note.txt))
        }
        if (filterBy.type) {
            notes = notes.filter(note => note.type === filterBy.type)
        }
        if (filterBy.pinned) {
            notes = notes.filter(note => note.isPinned)
        }
        return notes
    })
}

function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTES_KEY, note)
    } else {
        return storageService.post(NOTES_KEY, note)
    }
}

function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt
    if (filterBy.type !== undefined) gFilterBy.type = filterBy.type
    if (filterBy.pinned !== undefined) gFilterBy.pinned = filterBy.pinned
    return gFilterBy
}

function getDefaultFilter() {
    return { txt: '', type: '', pinned: false }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: 'n101',
                createdAt: 1112222,
                type: 'NoteTxt',
                isPinned: true,
                style: { backgroundColor: '#00d' },
                info: { txt: 'Fullstack Me Baby!' }
            },
            {
                id: 'n102',
                type: 'NoteImg',
                isPinned: false,
                info: { url: 'http://some-img/me', title: 'Bobi and Me' },
                style: { backgroundColor: '#00d' }
            },
            {
                id: 'n103',
                type: 'NoteTodos',
                isPinned: false,
                info: {
                    title: 'Get my stuff together',
                    todos: [
                        { txt: 'Driving license', doneAt: null },
                        { txt: 'Coding power', doneAt: 187111111 }
                    ]
                }
            }
        ]
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}