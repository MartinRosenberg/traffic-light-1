import PropTypes from 'prop-types'
import React from 'react'

export const Light = ({ light, on }) =>
  <div className={`light${on ? ' on' : ''}`} id={light} />

Light.propTypes = {
  light: PropTypes.string.isRequired,
  on: PropTypes.bool.isRequired,
}
