import React from 'react'
import Base from './helpers/BaseComponent.react'

import TodoStore from '../stores/TodoStore'

import Header from './Header.react'
import TodoInput from './TodoInput.react'
import TodoList from './TodoList.react'
import Footer from './Footer.react'

function getTodoState() {
    return {
        allTodos: TodoStore.getAll()
    }
}

export default class TodoApp extends Base {

    constructor() {
        super()
        this._bind('_onChange')
        this.state = getTodoState()
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        TodoStore.removeListener(this._onChange)
    }

    render() {
        return (
            <main>
                <Header />
                <TodoList allTodos={this.state.allTodos} />
                <Footer allTodos={this.state.allTodos} />
            </main>
        )
    }

    _onChange() {
        this.setState(getTodoState())
    }
}
