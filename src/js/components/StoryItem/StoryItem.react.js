import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import {Link} from 'react-router'

export default class StoryItem extends Base {
    constructor() {
        super()
    }

    render() {
        let story = this.props.story
        let title
        let destination = "/stories/" + story.id
        let text

        if(this.props.isCompact) {
            title = (
                <Link to={destination} className="story-title">
                    {story.title}
                </Link>
            )
        }
        else {
            title = (
                <div className="story-title">
                    {story.title}
                </div>
            )
        }

        return (
            <div className="story">
                {title}
                <div className="story-text">
                    {story.text}
                </div>
            </div>
        )
    }
}
