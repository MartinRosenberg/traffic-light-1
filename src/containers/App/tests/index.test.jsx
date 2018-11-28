import { shallow } from 'enzyme'
import React from 'react'

import { App } from '..'

describe('App container', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot()
  })
})
