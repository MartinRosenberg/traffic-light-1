import { shallow } from 'enzyme'
import React from 'react'

import { lights } from '../../../containers/App/constants'
import { Housing } from '..'

describe('Housing component', () => {
  test('should render correctly', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Housing lights={lights} onClick={onClick}/>)
    expect(wrapper).toMatchSnapshot()
  })
})
