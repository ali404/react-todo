import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import StoryInput from './StoryInput.react'
import StoryActions from '../../actions/StoryActions'

export default class StoryInputContainer extends Base {
    constructor() {
        super()
        this._bind(
            '_onSave'
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="ten columns centered">
                        <StoryInput onSave={this._onSave} />
                    </div>
                </div>
            </div>
        )
    }

    _onSave(title, text) {
        StoryActions.create(title, text)
    }
}
