import React from 'react'
import Base from '../_helpers/BaseComponent.react'
import {Link} from 'react-router'

export default class Header extends Base {
    constructor() {
        super()
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="ten columns centered">
                            <h1 className="title-centered">Story</h1>
                            <Link to="/">Home</Link>
                            <Link to="/stories">Stories</Link>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
