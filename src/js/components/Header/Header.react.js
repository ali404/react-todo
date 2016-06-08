import React from 'react'
import Base from '../_helpers/BaseComponent.react'
import {Link} from 'react-router'
import classNames from 'classnames'

export default class Header extends Base {
    constructor() {
        super()
        this._bind(
            '_toggleMenu',
            '_getInitialState'
        )

        this.state = this._getInitialState()
    }

    _getInitialState() {
        return {
            isMenuActive: false
        }
    }

    render() {
        let menuClass = classNames({
            'header-collapsable': true,
        })

        let buttonClass = classNames({
            'header-menu--button': true,
        })

        return (
            <header className="header">
                <div className="container">
                    <div className="header-menu">
                        <div className="header-menu--title">
                            <Link to="/" className="header-menu--logo">
                                <i className="material-icons">import_contacts</i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={menuClass}>
                    <nav className="header-navigation">
                    <ul className="header-navigation--section">
                        <li className="header-navigation--element">
                            <Link to="/" className="">Home</Link>
                        </li>
                        <li className="header-navigation--element">
                            <Link to="/stories" className="">Stories</Link>
                        </li>
                        <li className="header-navigation--element">
                            <Link to="/stories" className="">Labels</Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </header>
        )
    }

    _toggleMenu() {
        this.setState({
            isMenuActive: !this.state.isMenuActive
        })
    }
}
