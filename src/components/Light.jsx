import React from 'react'

export const Light = ({ light, on }) =>
  <div className={`light ${on || 'off'}`} id={light} />
