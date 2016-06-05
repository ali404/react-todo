import React from 'react'
import Base from './helpers/BaseComponent.react'

export default class CompletedItem extends Base {
    constructor() {
        super()
        this._bind('_uncompleteTodo')
    }

    render() {
        let todo = this.props.todo

        return (
            <div className="ten columns card centered">
                <p
                    className="card-text">
                        {todo.text}
                </p>
                <p
                    className="card-text">
                        Date completed: {todo.dateCompleted.toString()}
                </p>
                <div className="card-buttons">
                    <div
                        onClick={this._uncompleteTodo}
                        className="clickable">
                            <i className="material-icons">
                                settings_backup_restore
                            </i>
                    </div>
                </div>
            </div>
        )
    }

    _uncompleteTodo(e) {
        this.props.onUncompleteTodo(this.props.todo.id)
    }
}
