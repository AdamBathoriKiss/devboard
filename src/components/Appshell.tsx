import { Outlet } from "react-router";
import Navigation from "./ui/Navigation";
import React from "react";
import Theme from "./ui/Theme";

export default function Appshell(): React.JSX.Element {
	return (
		<React.Fragment>
			<Navigation />
			<Outlet />
			<Theme/>
		</React.Fragment>
	);
}
