import React from 'react'
import Base from '../components/_helpers/BaseComponent.react'

import DisplayStoryContainer
    from '../components/DisplayStory/DisplayStoryContainer.react'

export default class StoriesSingle extends Base {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <DisplayStoryContainer id={this.props.params.storyId} />
            </div>
        )
    }
}
