import React from "react";
import Button from "../shared/Button";
import useNavigation from "../../hooks/useNavigation.tsx";

export default function Navigation(): React.JSX.Element {
	const { icons, icon, toggleTheme, toggleMenu, menuActive, mobile } = useNavigation();

	if (mobile) {
		return (
			<nav className="content">
				<ul>
					<li>
						<h4>DevBoard</h4>
					</li>
					<li>
						<Button
							className="componentBox"
							icon={menuActive ? icons.openedMenuIcon : icons.hamburgerIcon}
							onClick={toggleMenu}
						/>
					</li>
				</ul>
			</nav>
		);
	} else {
		return (
			<nav className="content">
				<ul>
					<li>
						<h3>DevBoard</h3>
					</li>
					<li>
						<input type="search" className="searchBar" placeholder="&#128269; Ticketek keresése" />
					</li>
					<li>
						<Button
							label="Rendezés: Prioritás"
							icon={icons.sortDownIcon}
							className="componentBox "
							onClick={toggleTheme}
						/>
					</li>
					<li>
						<Button icon={icon} className="componentBox btn-theme" onClick={toggleTheme} />
					</li>

					<li>
						<Button
							className="componentBox"
							label="Új ticket"
							icon={icons.sortAddIcon}
							onClick={toggleTheme}
						/>
					</li>
				</ul>
			</nav>
		);
	}
}
