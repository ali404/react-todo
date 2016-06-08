import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import StoryItem from '../StoryItem/StoryItem.react'

export default class DispalyStory extends Base {
    constructor() {
        super()
    }

    render() {
        let story = this.props.story

        return (
            <StoryItem
                key={story.id}
                story={story}
            />
        )
    }
}
