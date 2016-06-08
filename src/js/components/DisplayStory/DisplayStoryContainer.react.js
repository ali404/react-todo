import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import DisplayStory from './DisplayStory.react'
import StoryStore from '../../stores/StoryStore'

export default class DisplayStoryContainer extends Base {
    constructor(props) {
        super(props)
        this._bind(
            '_getInitialState'
        )

        this.state = this._getInitialState(props.id)
    }

    _getInitialState(id) {
        return {
            story: StoryStore.getSingle(id)
        }
    }

    render() {
        return (
            <DisplayStory story={this.state.story} />
        )
    }
}
