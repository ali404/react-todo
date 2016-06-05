import React from 'react'
import Base from './helpers/BaseComponent.react'

import DisplayTodosContainer from './DisplayTodos/DisplayTodosContainer.react'

export default class MainArea extends Base {
    constructor() {
        super()
        this._bind()
    }

    render() {
        let query = {
            complete: false
        }

        return (
            <DisplayTodosContainer query={query} />
        )
    }
}
