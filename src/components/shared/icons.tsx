import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowDownShortWide,
	faArrowUpWideShort,
	faBars,
	faMoon,
	faPlus,
	faSun,
	faX,
} from "@fortawesome/free-solid-svg-icons";

export const icons = {
	hamburgerIcon: <FontAwesomeIcon icon={faBars} />,
	openedMenuIcon: <FontAwesomeIcon icon={faX} />,
	sunIcon: <FontAwesomeIcon icon={faSun} />,
	moonIcon: <FontAwesomeIcon icon={faMoon} />,
	sortDownIcon: <FontAwesomeIcon icon={faArrowDownShortWide} />,
	sortUpIcon: <FontAwesomeIcon icon={faArrowUpWideShort} />,
	sortAddIcon: <FontAwesomeIcon icon={faPlus} />,
};
