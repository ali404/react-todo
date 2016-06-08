import AppDispatcher from '../dispatcher/AppDispatcher'
import StoryConstants from '../constants/StoryConstants'

class StoryActions {
    constructor() {
        //do nothing
    }

    create(title, text) {
        AppDispatcher.dispatch({
            actionType: StoryConstants.STORY_CREATE,
            text: text,
            title: title
        })
    }

    destroy(id) {
        AppDispatcher.dispatch({
            actionType: StoryConstants.STORY_DESTROY,
            id: id
        })
    }
}

let storyStoreInstance = new StoryActions()

export default storyStoreInstance
