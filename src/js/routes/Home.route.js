import React from 'react'
import Base from '../components/_helpers/BaseComponent.react'

import StoryInputContainer
    from '../components/StoryInput/StoryInputContainer.react'

export default class Home extends Base {
    constructor() {
        super()
    }

    render() {
        return (
            <StoryInputContainer />
        )
    }
}
