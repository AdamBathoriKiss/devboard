import React, { useState } from "react";
import type { TicketCategory } from "../types/ticket";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchTicketList } from "../store/ticketSlice";

const ticketCategories: TicketCategory[] = [
	{ type: "todo", label: "Todo" },
	{ type: "in_progress", label: "Folyamatban" },
	{ type: "closed", label: "Kész" },
];

export default function useTicketHandling() {
	const ticketList = useAppSelector((state) => state.tickets.ticketList);
	const isLoading = useAppSelector((state) => state.tickets.isLoading);
	const error = useAppSelector((state) => state.tickets.error);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchTicketList());
	}, [dispatch]);

	const handleChanges = () => {};

	const handleSubmit = () => {};

	return { ticketCategories, ticketList, isLoading, error };
}
