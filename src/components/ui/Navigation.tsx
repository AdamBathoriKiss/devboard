import React from "react";
import { ThemeContext } from "../../ThemeProvider.tsx";
import Button from "../shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownShortWide, faArrowUpWideShort, faMoon, faPlus, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navigation(): React.JSX.Element {
	const { theme, setTheme } = React.useContext(ThemeContext);
	const sunIcon = <FontAwesomeIcon icon={faSun} />;
	const moonIcon = <FontAwesomeIcon icon={faMoon} />;
	const sortDownIcon = <FontAwesomeIcon icon={faArrowDownShortWide} />;
	const sortUpIcon = <FontAwesomeIcon icon={faArrowUpWideShort} />;
	const sortAddIcon = <FontAwesomeIcon icon={faPlus} />;
	const [icon, setIcon] = React.useState(theme === "light" ? sunIcon : moonIcon);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		setIcon(theme === "light" ? moonIcon : sunIcon);
	};

	return (
		<nav className="content">
			<ul>
				<li>
					<h3>DevBoard</h3>
				</li>
				<li>
					<input type="search" className="searchBar" placeholder="&#128269; Ticketek keresése"/>
				</li>
				<li>
					<Button
						label="Rendezés: Prioritás"
						icon={sortDownIcon}
						className="componentBox "
						onClick={toggleTheme}
					/>
				</li>
				<li>
					<Button icon={icon} className="componentBox btn-theme" onClick={toggleTheme} />
				</li>

				<li>
					<Button className="componentBox" label="Új ticket" icon={sortAddIcon} onClick={toggleTheme} />
				</li>
			</ul>
		</nav>
	);
}
