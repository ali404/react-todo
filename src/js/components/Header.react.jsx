import React from 'react'
import Base from './helpers/BaseComponent.react'

import TodoInput from './TodoInput.react'

import TodoActions from '../actions/TodoActions'

export default class Header extends Base {
    constructor() {
        super()
        this._bind('_onSave')
    }

    render() {
        return (
            <div>
                <h1>TODO App</h1>
                <TodoInput onSave={this._onSave} />
            </div>
        )
    }

    _onSave(text) {
        TodoActions.create(text)
    }
}
