import React from 'react'
import Base from '../components/_helpers/BaseComponent.react'

export default class TodoSingle extends Base {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                {this.props.params.todoId}
            </div>
        )
    }
}
