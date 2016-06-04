import AppDispatcher from '../dispatcher/AppDispatcher'
import FluxStore from './FluxStore'
import TodoConstants from '../constants/TodoConstants'

let _todos = {}

function create(text) {
    let dateNow = Date.now()
    let id = Date.now()

    _todos[id] = {
        id: id,
        dateCreated: dateNow,
        complete: false,
        dateCompleted: undefined,
        text: text
    }
}

function destroy(id) {
    delete _todos[id]
}

function update(id, text) {
    // check if todo exists
    if(!!_todos[id]) {
        _todos[id].text = text
    }
    else {
        // it should give an error
        // TODO: read error handling pattern in JS
        return false
    }
}

function toggleComplete(id) {
    if(_todos[id].complete) {
        // raise an error, you should not be able to toggle a complete todo
    }
    else {
        let dateNow = new Date()
        _todos[id].complete = true
        _todos[id].dateCompleted = dateNow
    }
}

function toggleCompleteAll() {
    let dateNow = new Date()
    for(key in _todos) {
        _todos[key].complete = true
        _todos[key].dateCompleted = dateNow
    }
}

function toggleUncomplete(id) {
    if(_todos[id]) {
        if(!_todos[id].complete) {
            return false
        }
        else {
            _todos[id].complete = false
        }
    }
    else {
        return false
    }
}

class TodoStore extends FluxStore {
    constructor() {
        super()
    }

    getAll() {
        return _todos
    }

    getSingle(id) {
        return _todos[id]
    }
}

let todoStoreInstance = new TodoStore()

todoStoreInstance.dispatchToken = AppDispatcher.register(payload => {
    let action = payload.actionType

    switch(action) {

        case TodoConstants.TODO_CREATE:
            let text = payload.text.trim()
            if(text !== '') {
                create(text)
                todoStoreInstance.emitChange()
            }
            break

        case TodoConstants.TODO_DESTROY:
            destroy(payload.id)
            todoStoreInstance.emitChange()
            break

        case TodoConstants.TODO_UPDATE:
            update(payload.id, payload.text)
            todoStoreInstance.emitChange()
            break

        case TodoConstants.TODO_TOGGLE_COMPLETE:
            toggleComplete(payload.id)
            todoStoreInstance.emitChange()
            break

        case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
            toggleCompleteAll()
            todoStoreInstance.emitChange()
            break

        case TodoConstants.TODO_TOGGLE_UNCOMPLETE:
            toggleUncomplete(payload.id)
            todoStoreInstance.emitChange()
            break
    }

    return true
})

export default todoStoreInstance
