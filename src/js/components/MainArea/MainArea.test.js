import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {expect} from 'chai'
import MainArea from './MainArea.react'

describe('MainArea', () => {
    it('renders without problems', () => {
        let mainArea = TestUtils.renderIntoDocument(<MainArea />)
        expect(mainArea).to.exist
    })
})
