import React from 'react'
import Base from '../_helpers/BaseComponent.react'
import TodoActions from '../../actions/TodoActions'

import DisplayTodosContainer from '../DisplayTodos/DisplayTodosContainer.react'


export default class Footer extends Base {
    constructor() {
        super()
        this._bind()
    }

    render() {
        let query = {
            complete: true
        }
        let message = ''

        // if(completedTodos.length === 0) {
        //     message = 'No completed todos'
        // }
        // else {
        //     message = 'Completed todos: '
        // }

        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="ten columns centered">
                            <p className="message">{message}</p>
                        </div>
                    </div>
                </div>
                <DisplayTodosContainer query={query} />
            </section>
        )
    }
}
