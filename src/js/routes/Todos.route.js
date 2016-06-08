import React from 'react'
import Base from '../components/_helpers/BaseComponent.react'

import DisplayTodosContainer
    from '../components/DisplayTodos/DisplayTodosContainer.react'

export default class Todos extends Base {
    constructor() {
        super()
    }

    render() {
        let queryCompleted = {
            completed: true
        }

        let queryUncompleted = {
            compelted: false
        }

        return (
            <div>
                <p>Remaining Todos</p>
                <DisplayTodosContainer query={queryUncompleted} />
                <p>Completed Todos</p>
                <DisplayTodosContainer query={queryCompleted} />
            </div>
        )
    }
}
