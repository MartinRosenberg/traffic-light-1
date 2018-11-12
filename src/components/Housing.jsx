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
    }, error => {
      console.error(error)
    })

  render () {
    return (
      <div id="box" onClick={this.handleLightChange}>
        {lights.map(light =>
          <Light
            key={light}
            light={light}
            on={light === this.state.currentLight}
          />
        )}
      </div>
    )
  }
}
