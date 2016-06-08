import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import StoryStore from '../../stores/StoryStore'
import DisplayStories from './DisplayStories.react'

export default class DisplayTodosContainer extends Base {
    constructor(props) {
        super(props)
        this._bind(
            '_getStoryState',
            '_onChange'
        )
        this.state = this._getStoryState()
    }

    _getStoryState() {
        return {
            allStories: StoryStore.getAll()
        }
    }

    componentDidMount() {
        StoryStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        StoryStore.removeChangeListener(this._onChange)
    }

    render() {
        let todos = []
        let allStories = this.state.allStories

        return (
            <DisplayStories allStories={allStories} />
        )
    }

    _onChange() {
        this.setState(this._getStoryState())
    }
}
