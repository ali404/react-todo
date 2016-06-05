import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import TodoApp from './TodoApp.react'

describe('TodoApp', () => {
    it('renders without problems', () => {
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />)
        expect(todoApp).toExist()
    })
})
