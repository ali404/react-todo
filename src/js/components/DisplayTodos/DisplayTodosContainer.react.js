import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import TodoStore from '../../stores/TodoStore'
import DisplayTodos from './DisplayTodos.react'

export default class DisplayTodosContainer extends Base {
    constructor(props) {
        super(props)
        this._bind(
            '_getTodoState',
            '_onChange'
        )
        this.state = this._getTodoState(props.query)
    }

    _getTodoState(query) {
        return {
            allTodos: TodoStore.getAllByQuery(query)
        }
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        TodoStore.removeListener(this._onChange)
    }

    render() {
        let todos = []
        let allTodos = this.state.allTodos

        return (
            <DisplayTodos allTodos={allTodos} />
        )
    }

    _onChange() {
        this.setState(this._getTodoState(this.props.query))
    }
}
