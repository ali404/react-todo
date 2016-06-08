import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import StoryItem from '../StoryItem/StoryItem.react'

export default class DisplayStories extends Base {
    constructor() {
        super()
        this._bind()
    }

    render() {
        let allStories = this.props.allStories
        let stories = []

        for(let key in allStories) {
            stories.push(
                <StoryItem
                    key={allStories[key].id}
                    story={allStories[key]}
                    isCompact={true}
                />
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <ul>{stories}</ul>
                </div>
            </div>
        )
    }
}
