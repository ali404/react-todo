import React from 'react'
import Base from '../components/_helpers/BaseComponent.react'

import TodoInputContainer 
    from '../components/TodoInput/TodoInputContainer.react'
import MainArea from '../components/MainArea/MainArea.react'
import Footer from '../components/Footer/Footer.react'

export default class Home extends Base {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <TodoInputContainer />
                <MainArea />
                <Footer />
            </div>
        )
    }
}
