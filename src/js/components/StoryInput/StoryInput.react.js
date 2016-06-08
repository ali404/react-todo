import React from 'react'
import Base from '../_helpers/BaseComponent.react'

function getInputInitialState() {
    return {
        titleValue: '',
        textValue: ''
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
        let titleValue = this.state.titleValue
        let textValue = this.state.textValue
        return (
            <div id="todo-input">
                <div
                    contentEditable="true"
                    placeholder="Story title"
                    className="input-normal"
                    onChange={this._onChange}
                    value={textValue}
                />
                <div
                    contentEditable="true"
                    placeholder="Story text"
                    className=""
                    value={textValue}
                />
                <button onClick={this._save}>
                    Save Story
                </button>
            </div>
        )
    }

    _onChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    _onKeyDown(e) {
        if(e.keyCode === 13) {
            this._save()
        }
    }

    _save() {
        this.props.onSave(this.state.value)
        this.setState({
            value: ''
        })
    }
}
