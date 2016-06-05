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
            <div className="ten columns card centered">
                <p
                    onDoubleClick={this._onDoubleClick}
                    className="card-text">
                        {text}
                </p>
                <div className="card-buttons">
                    <div
                        onClick={this._toggleComplete}
                        className="clickable complete">
                            <i className="material-icons">done</i>
                    </div>
                    <div
                        onClick={this._destroy}
                        className="clickable destroy">
                            <i className="material-icons">delete</i>
                    </div>
                </div>
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
