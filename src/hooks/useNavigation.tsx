
import { useState } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "./useMediaQuery";
import iconlist from "../components/shared/iconlist";


export default function useNavigation() {
	const navigate = useNavigate();
	const isMobile = useMediaQuery('(max-width: 568px)');
    const [menuActive, setMenuActive] = useState(false);
    const {icons} = iconlist()


    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    const refresh = () => {
        if(menuActive){setMenuActive(false)}
    }

    const createTicket = () => {
        navigate('/ticket/add')
        if(menuActive){setMenuActive(false)}
    }

	return { icons,toggleMenu, menuActive, isMobile,refresh,createTicket };
}
