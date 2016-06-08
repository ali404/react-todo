import React from 'react'
import Base from '../_helpers/BaseComponent.react'

function getInputInitialState() {
    return {
        title: '',
        text: ''
    }
}

export default class StoryInput extends Base {

    constructor() {
        super()
        this._bind(
            '_save',
            '_onChange',
            '_onKeyDown'
        )

        this.state = getInputInitialState()
    }

    render() {
        let title = this.state.title
        let text = this.state.text

        return (
            <div id="todo-input">
                <input
                    placeholder="Story title"
                    className="input-normal"
                    name="title"
                    onChange={this._onChange}
                    value={title}
                />
                <input
                    placeholder="Story text"
                    className=""
                    name="text"
                    onChange={this._onChange}
                    value={text}
                />
                <button onClick={this._save}>
                    Save Story
                </button>
            </div>
        )
    }

    _onChange(e) {
        let state = {}
        state[e.target.name] = e.target.value
        this.setState(state)
    }

    _onKeyDown(e) {
        if(e.keyCode === 13) {
            this._save()
        }
    }

    _save() {
        this.props.onSave(this.state.title, this.state.text)
        this.setState({
            title: '',
            text: '',
        })
    }
}
