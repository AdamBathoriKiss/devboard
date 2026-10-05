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
import React, { useEffect, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import { useNavigate } from "react-router";

export default function useNavigation() {
	const navigate = useNavigate();
	let screen = window.innerWidth;

	const { theme, setTheme } = React.useContext(ThemeContext);
	const hamburgerIcon = <FontAwesomeIcon icon={faBars} />;
    const openedMenuIcon = <FontAwesomeIcon icon={faX} />;
	const sunIcon = <FontAwesomeIcon icon={faSun} />;
	const moonIcon = <FontAwesomeIcon icon={faMoon} />;
	const sortDownIcon = <FontAwesomeIcon icon={faArrowDownShortWide} />;
	const sortUpIcon = <FontAwesomeIcon icon={faArrowUpWideShort} />;
	const sortAddIcon = <FontAwesomeIcon icon={faPlus} />;
	const icons = { hamburgerIcon,openedMenuIcon, sunIcon, moonIcon, sortDownIcon, sortUpIcon, sortAddIcon };
	const [icon, setIcon] = React.useState(theme === "light" ? icons.sunIcon : icons.moonIcon);
    const [mobile, setMobile] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(()=> {
        if(screen <= 576){
            setMobile(true)
        }else {
            setMobile(false)
        }
    }, [screen])

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
		setIcon(theme === "light" ? icons.moonIcon : icons.sunIcon);
	};

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    const refresh = () => {
        navigate('/')
        if(menuActive){setMenuActive(false)}
    }

    const createTicket = () => {
        navigate('/ticket/add')
        if(menuActive){setMenuActive(false)}
    }

	return { icons, icon, toggleTheme,toggleMenu, menuActive, mobile,refresh,createTicket };
}
