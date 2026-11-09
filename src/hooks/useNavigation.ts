import { useState } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "./useMediaQuery";
import { setSearchParam } from "../store/ticketSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function useNavigation() {
	const navigate = useNavigate();
	const isMobile = useMediaQuery("(max-width: 568px)");
	const [menuActive, setMenuActive] = useState(false);
	const dispatch = useAppDispatch();
	const searchParam = useAppSelector((state) => state.tickets.searchParam);

	const handleSearchParam = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchParam(e.target.value));
	};

	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	const refresh = () => {
		navigate("/");
		if (menuActive) {
			setMenuActive(false);
		}
	};

	const createTicket = () => {
		navigate("/ticket/add");
		if (menuActive) {
			setMenuActive(false);
		}
	};

	return { toggleMenu, menuActive, isMobile, refresh, createTicket, searchParam, handleSearchParam };
}
