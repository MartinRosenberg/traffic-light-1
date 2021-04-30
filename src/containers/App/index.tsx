import React, { FC, useState } from "react"

import { Light } from "../../components/Light"
import { Housing } from "../../components/Housing"
import { lights } from "./constants"
import { fetchLight } from "./utils"

type AppState = {
	currentLight: string | null
}

export const App: FC = () => {
	const [state, setState] = useState({ currentLight: null } as AppState)

	const handleLightChange = () =>
		fetchLight()
			.then((result) => {
				setState({ currentLight: result })
			})
			.catch((error) => {
				console.error(error)
			})

	return (
		<Housing
			lights={lights.map((light) => (
				<Light
					color={light}
					key={light}
					powered={light === state.currentLight}
				/>
			))}
			onClick={handleLightChange}
		/>
	)
}
