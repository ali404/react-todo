import React from 'react'
import Base from './helpers/BaseComponent.react'

export default class TodoItem extends Base {
    constructor() {
        super()
        this._bind(
            '_onDoubleClick',
            '_toggleComplete',
            '_destroy')
    }

    render() {
        let text = this.props.todo.text

        return (
            <div>
                <p onDoubleClick={this._onDoubleClick}>{text}</p>
                <button onClick={this._toggleComplete}>Complete it</button>
                <button onClick={this._destroy}>Delete it</button>
            </div>
        )
    }

    _onDoubleClick(e) {
        e.target.contentEditable = true
    }

    _toggleComplete() {
        this.props.onToggleComplete(this.props.todo.id)
    }

    _destroy() {
        this.props.onDestroy(this.props.todo.id)
    }
}
