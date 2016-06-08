import React from 'react'
import Base from '../components/_helpers/BaseComponent.react'

import DisplayStoriesContainer
    from '../components/DisplayStories/DisplayStoriesContainer.react'

export default class Stories extends Base {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                Stories:
                <DisplayStoriesContainer />
            </div>
        )
    }
}
