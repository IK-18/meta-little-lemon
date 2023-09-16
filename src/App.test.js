import {render, screen} from "@testing-library/react";

import {Reservations} from "./Components";

test("Checking Time Status Section", () => {
	render(<Reservations />);

	const statusHeadaing = screen.getByText("Evening");

	expect(statusHeadaing).toBeInTheDocument();
});
