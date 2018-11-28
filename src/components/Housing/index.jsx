import PropTypes from 'prop-types'
import React from 'react'

export const Housing = ({ lights, onClick }) =>
  <div className={'housing'} onClick={onClick}>
    {lights}
  </div>

Housing.propTypes = {
  lights: PropTypes.arrayOf(PropTypes.node).isRequired,
  onClick: PropTypes.func.isRequired,
}
