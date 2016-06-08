import React from 'react'
import Base from '../_helpers/BaseComponent.react'

export default class StoryItem extends Base {
    constructor() {
        super()
    }

    render() {
        let story = this.props.story
        return (
            <div className="story">
                <div className="story-title">
                    {story.title}
                </div>
                <div className="story-text">
                    {story.text}
                </div>
            </div>
        )
    }
}
