import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import TodoInput from './TodoInput.react'
import TodoActions from '../../actions/TodoActions'

export default class TodoInputContainer extends Base {
    constructor() {
        super()
        this._bind(
            '_onSave'
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="ten columns centered">
                        <TodoInput onSave={this._onSave} />
                    </div>
                </div>
            </div>
        )
    }

    _onSave(text) {
        TodoActions.create(text)
    }
}
