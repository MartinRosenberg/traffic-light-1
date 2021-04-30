import React, { FC, MouseEventHandler, ReactNodeArray } from "react"

type HousingProps = {
	lights: ReactNodeArray
	onClick: MouseEventHandler
}

export const Housing: FC<HousingProps> = ({ lights, onClick }) => (
	<div className={"housing"} onClick={onClick}>
		{lights}
	</div>
)
