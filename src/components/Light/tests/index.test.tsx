import { shallow } from 'enzyme'
import React from 'react'

import { Light } from '..'

describe('Housing component', () => {
  [true, false].map(powered =>
    test(`should render light correctly when ${powered ? 'on' : 'off'}`, () => {
      const wrapper = shallow(<Light color={'red'} powered={powered}/>)
      expect(wrapper).toMatchSnapshot()
    })
  )
})
