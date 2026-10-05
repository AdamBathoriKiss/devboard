import { Outlet } from "react-router";
import Navigation from "./ui/Navigation";
import React from "react";

export default function Appshell(): React.JSX.Element {
	return (
		<React.Fragment>
			<Navigation />
			<Outlet />
		</React.Fragment>
	);
}
