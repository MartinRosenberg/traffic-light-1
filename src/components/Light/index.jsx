import PropTypes from 'prop-types'
import React from 'react'

export const Light = ({ color, powered }) =>
  <div className={`${powered ? `${color} ` : ''}light`} />

Light.propTypes = {
  color: PropTypes.string.isRequired,
  powered: PropTypes.bool.isRequired,
}
