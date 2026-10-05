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

export default function iconlist() {
    const hamburgerIcon = <FontAwesomeIcon icon={faBars} />;
        const openedMenuIcon = <FontAwesomeIcon icon={faX} />;
        const sunIcon = <FontAwesomeIcon icon={faSun} />;
        const moonIcon = <FontAwesomeIcon icon={faMoon} />;
        const sortDownIcon = <FontAwesomeIcon icon={faArrowDownShortWide} />;
        const sortUpIcon = <FontAwesomeIcon icon={faArrowUpWideShort} />;
        const sortAddIcon = <FontAwesomeIcon icon={faPlus} />;
        const icons = { hamburgerIcon,openedMenuIcon, sunIcon, moonIcon, sortDownIcon, sortUpIcon, sortAddIcon };

        return {icons}
}