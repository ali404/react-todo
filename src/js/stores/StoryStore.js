import {EventEmitter} from 'events'
import AppDispatcher from '../dispatcher/AppDispatcher'
import FluxStore from './FluxStore.js'

import StoryConstants from '../constants/StoryConstants'

let _stories = {}

function create(title, text) {
    let id = ""
    for(let i=0; i<16; i++) {
        id += Math.floor(Math.random() * 10)
    }

    _stories[id] = {
        id: id,
        dateCreated: new Date(),
        title: title,
        text: text
    }
}

function destroy(id) {
    delete _stories[id]
}

class StoryStore extends FluxStore {
    constructor() {
        super()
    }

    getAll() {
        console.log(_stories)
        return _stories
    }

    getSingle(id) {
        return _stories[id]
    }
}

let storyStoreInstance = new StoryStore()

storyStoreInstance.dispatchToken = AppDispatcher.register(payload => {
    let action = payload.actionType

    switch(action) {

        case StoryConstants.STORY_CREATE:
            let title = payload.title
            let text = payload.text
            create(title, text)
            storyStoreInstance.emitChange()
            break

        case StoryConstants.STORY_DESTROY:
            let id = payload.id
            destory(id)
            storyStoreInstance.emitChange()
            break
    }

    return true
})

export default storyStoreInstance
