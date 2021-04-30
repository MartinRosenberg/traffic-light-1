import { shallow } from "enzyme"
import React from "react"

import { lights } from "../../../containers/App/constants"
import { Housing } from ".."
import { Light } from "../../Light"

describe("Housing component", () => {
	test("should render correctly", () => {
		const onClick = jest.fn()
		const wrapper = shallow(
			<Housing
				lights={lights.map((color) => (
					<Light color={color} powered={true} key={color} />
				))}
				onClick={onClick}
			/>
		)
		expect(wrapper).toMatchSnapshot()
	})
})
