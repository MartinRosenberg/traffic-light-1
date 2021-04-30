import React, { FC } from "react"

type LightProps = {
	color: string
	powered: boolean
}

export const Light: FC<LightProps> = ({ color, powered }) => (
	<div className={`${powered ? `${color} ` : ""}light`} />
)
