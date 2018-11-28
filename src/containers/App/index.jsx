import React, { Component } from 'react'

import { Light } from '../../components/Light'
import { Housing } from '../../components/Housing'
import { lights } from './constants'
import { fetchLight } from './utils'

export class App extends Component {
  state = {
    currentLight: null
  }

  handleLightChange = () =>
    fetchLight().then(result => {
      this.setState({ currentLight: result })
    }).catch(error => {
      console.error(error)
    })

  render () {
    return (
      <Housing
        lights={lights.map(light =>
          <Light
            color={light}
            key={light}
            powered={light === this.state.currentLight}
          />
        )}
        onClick={this.handleLightChange}
      />
    )
  }
}
