import React from 'react'
import Base from './helpers/BaseComponent.react'

import DisplayTodos from './DisplayTodos.react'

export default class MainArea extends Base {
    constructor() {
        super()
        this._bind(
            '_filterUncompletedTodos'
        )
    }

    // TODO: put comment
    _filterUncompletedTodos(allTodos) {
        let todos = []
        for(let key in allTodos) {
            if(allTodos[key].complete === false) {
                todos.push(allTodos[key])
            }
            else {
                // do nothing
            }
        }

        return todos
    }

    render() {
        let uncompletedTodos = this._filterUncompletedTodos(this.props.allTodos)

        return (
            <DisplayTodos allTodos={uncompletedTodos} />
        )
    }
}
