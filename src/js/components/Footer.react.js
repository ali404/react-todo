import React from 'react'
import Base from './helpers/BaseComponent.react'
import TodoActions from '../actions/TodoActions'

import DisplayTodos from './DisplayTodos.react'


export default class Footer extends Base {
    constructor() {
        super()
        this._bind('_filterCompletedTodos')
    }

    _filterCompletedTodos(allTodos) {
        let todos = []
        for(let key in allTodos) {
            if(allTodos[key].complete === true) {
                todos.push(allTodos[key])
            }
            else {
                // do nothing, the todo is uncompleted
            }
        }

        return todos
    }

    render() {
        let completedTodos = this._filterCompletedTodos(this.props.allTodos)
        let message = ''

        if(completedTodos.length === 0) {
            message = 'No completed todos'
        }
        else {
            message = 'Completed todos: '
        }

        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="ten columns centered">
                            <p className="message">{message}</p>
                        </div>
                    </div>
                </div>
                <DisplayTodos allTodos={completedTodos} />
            </section>
        )
    }
}
