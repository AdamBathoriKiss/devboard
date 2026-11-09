import React from "react";
import Button from "../shared/Button";
import useNavigation from "../../hooks/useNavigation.ts";
import { icons } from "../shared/icons.tsx";
import { useAppSelector } from "../../store/hooks.ts";

export default function Navigation(): React.JSX.Element {
	const { toggleMenu, menuActive, isMobile, refresh, createTicket, handleSearchParam } = useNavigation();
	const searchParam = useAppSelector((state) => state.tickets.searchParam);

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
								<input
									type="search"
									className="searchBar"
									value={searchParam}
									onChange={(e) => handleSearchParam(e)}
									placeholder="&#128269; Ticketek keresése"
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
						<input
							type="search"
							className="searchBar"
							value={searchParam}
							onChange={(e) => handleSearchParam(e)}
							placeholder="&#128269; Ticketek keresése"
						/>
					</li>
					<li>
						<Button
							label="Rendezés: Prioritás"
							icon={icons.sortDownIcon}
							className="componentBox "
							onClick={() => alert("Rendezés folyamatban")}
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
