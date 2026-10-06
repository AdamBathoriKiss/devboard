import { useState } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "./useMediaQuery";


export default function useNavigation() {
	const navigate = useNavigate();
	const isMobile = useMediaQuery('(max-width: 568px)');
    const [menuActive, setMenuActive] = useState(false);


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

	return { toggleMenu, menuActive, isMobile,refresh,createTicket };
}
