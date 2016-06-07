import React from 'react'
import Base from '../components/_helpers/BaseComponent.react'

import Header from '../components/Header/Header.react'
import Footer from '../components/Footer/Footer.react'

export default class App extends Base {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}
