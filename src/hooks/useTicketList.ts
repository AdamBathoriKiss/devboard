import type { TicketCategory } from "../types/ticket";
import { useAppSelector } from "../store/hooks";
import { useMemo } from "react";

const ticketCategories: TicketCategory[] = [
	{ type: "todo", label: "Todo" },
	{ type: "in_progress", label: "Folyamatban" },
	{ type: "closed", label: "Kész" },
];

export default function useTicketList() {
	const list = useAppSelector((state) => state.tickets.ticketList);
	const searchParam = useAppSelector((state) => state.tickets.searchParam);
	const filteredList = useMemo(() => list.filter((item) => item.title.includes(searchParam)), [searchParam]);
	const isLoading = useAppSelector((state) => state.tickets.isLoading);
	const error = useAppSelector((state) => state.tickets.error);

	const ticketList = searchParam.length !== 0 ? filteredList : list;

	return { ticketCategories, searchParam, ticketList, isLoading, error };
}
