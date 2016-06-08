import React from 'react'
import Base from '../components/_helpers/BaseComponent.react'

import Header from '../components/Header/Header.react'

export default class App extends Base {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
