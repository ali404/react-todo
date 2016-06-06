import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {expect} from 'chai'
import Header from './Header.react'

describe('Header', () => {
    it('renders without problems', () => {
        let header = TestUtils.renderIntoDocument(<Header />)
        expect(header).to.exist
    })
})
