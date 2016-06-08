import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import {Link} from 'react-router'

export default class TodoItem extends Base {
    constructor() {
        super()
        this._bind(
            '_toggleComplete',
            '_toggleUncomplete',
            '_destroy')
    }

    render() {
        let text = this.props.todo.text
        let id = this.props.todo.id
        let completed = this.props.todo.complete
        let todoLink = "/" + id

        let buttons

        if(completed == false) {
            buttons = (
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
            )
        }
        else {
            buttons = (
                <div className="card-buttons">
                    <div
                        onClick={this._toggleUncomplete}
                        className="clickable">
                            <i className="material-icons">
                                settings_backup_restore
                            </i>
                    </div>
                    <div
                        onClick={this._destroy}
                        className="clickable destroy">
                            <i className="material-icons">delete</i>
                    </div>
                </div>
            )
        }

        return (

            <div className="ten columns card centered">
                <Link className="card-text" to={todoLink}>
                        {text}
                </Link>
                {buttons}
            </div>
        )
    }

    _toggleComplete() {
        this.props.onToggleComplete(this.props.todo.id)
    }

    _toggleUncomplete() {
        this.props.onToggleUncomplete(this.props.todo.id)
    }

    _destroy() {
        this.props.onDestroy(this.props.todo.id)
    }
}
