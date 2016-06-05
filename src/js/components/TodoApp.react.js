import React from 'react'
import Base from './helpers/BaseComponent.react'

import Header from './Header.react'
import MainArea from './MainArea.react'
import Footer from './Footer.react'

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
