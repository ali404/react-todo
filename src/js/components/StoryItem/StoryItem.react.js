import React from 'react'
import Base from '../_helpers/BaseComponent.react'

export default class StoryItem extends Base {
    constructor() {
        super()
    }

    render() {
        let story = this.props.story
        return (
            <div>
                <p>{story.title}</p>
                <p>{story.text}</p>
                <hr />
            </div>
        )
    }
}
