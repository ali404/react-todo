import React from 'react'
import Base from '../_helpers/BaseComponent.react'

import Header from '../Header/Header.react'
import MainArea from '../MainArea/MainArea.react'
import Footer from '../Footer/Footer.react'

export default class TodoApp extends Base {

    constructor() {
        super()
    }

    render() {
        return (
            <main>
                <Header />
                <MainArea />
                <Footer />
            </main>
        )
    }
}
