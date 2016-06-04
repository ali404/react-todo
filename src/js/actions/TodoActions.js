import AppDispatcher from '../dispatcher/AppDispatcher'
import TodoConstants from '../constants/TodoConstants'

class TodoActions {
    constructor() {
        //do nothing
    }

    create(text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        })
    }

    destroy(id) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY,
            id: id
        })
    }

    update(id, text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_UPDATE,
            text: text,
            id: id
        })
    }

    toggleComplete(id) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_TOGGLE_COMPLETE,
            id: id
        })
    }

    toggleCompleteAll() {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_TOGGLE_COMPELTE_ALL
        })
    }

    toggleUncomplete(id) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_TOGGLE_UNCOMPLETE,
            id: id
        })
    }
}

let todoActionsInstance = new TodoActions()

export default todoActionsInstance
