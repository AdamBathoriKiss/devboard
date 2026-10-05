import React from "react";
import { ThemeContext } from "../ThemeProvider";

export default function useTheme() {
	const { theme, setTheme } = React.useContext(ThemeContext);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return { theme,toggleTheme };
}
