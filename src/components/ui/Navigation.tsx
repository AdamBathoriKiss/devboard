import React from "react";
import Button from "../shared/Button";
import useNavigation from "../../hooks/useNavigation.tsx";
import useTheme from "../../hooks/useTheme.tsx";

export default function Navigation(): React.JSX.Element {
	const { icons, toggleMenu, menuActive, isMobile, refresh, createTicket } = useNavigation();
	const {toggleTheme} = useTheme();

	if (isMobile) {
		return (
			<React.Fragment>
				<nav className="content">
					<ul>
						<li>
							<h4 onClick={refresh}>DevBoard</h4>
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

				{menuActive ? (
					<div className="menuList">
						<ul>
							<li>
								<input type="search" className="searchBar" placeholder="&#128269; Ticketek keresése" />
							</li>
							<li>
								<Button
									className="componentBox"
									label="Új ticket"
									icon={icons.sortAddIcon}
									onClick={createTicket}
								/>
							</li>
						</ul>
					</div>
				) : null}
			</React.Fragment>
		);
	} else {
		return (
			<nav className="content">
				<ul>
					<li>
						<h3 onClick={refresh}>DevBoard</h3>
					</li>
					<li>
						<input type="search" className="searchBar" placeholder="&#128269; Ticketek keresése" />
					</li>
					<li>
						<Button
							label="Rendezés: Prioritás"
							icon={icons.sortDownIcon}
							className="componentBox "
							onClick={()=> alert('Rendezés folyamatban')}
						/>
					</li>


					<li>
						<Button
							className="componentBox"
							label="Új ticket"
							icon={icons.sortAddIcon}
							onClick={createTicket}
						/>
					</li>
				</ul>
			</nav>
		);
	}
}
