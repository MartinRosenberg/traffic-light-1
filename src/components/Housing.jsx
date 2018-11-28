import React, { Component } from 'react'

import { fetchLight, lights } from '../utils'
import { Light } from './Light'

export class Housing extends Component {
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
      <div className={'housing'} onClick={this.handleLightChange}>
        {lights.map(light =>
          <Light
            color={light}
            key={light}
            powered={light === this.state.currentLight}
          />
        )}
      </div>
    )
  }
}
