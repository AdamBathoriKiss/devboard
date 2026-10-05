import React, { createContext, useEffect } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType>({
	theme: "dark",
	setTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = React.useState<Theme>("dark");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
