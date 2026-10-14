import React from "react";
import type { Ticket, TicketCategory } from "../types/ticket";

export default function useTicketList() {
	const ticketCategories: TicketCategory[] = [
		{ type: "todo", label: "Todo" },
		{ type: "in_progress", label: "Folyamatban" },
		{ type: "closed", label: "Kész" },
	];

	const [ticketList, setTicketList] = React.useState<Ticket[]>([]);

	React.useEffect(() => {
		fetch("/api/tickets").then(async (res) => {
			if (typeof res.json !== undefined) {
				setTicketList(await res.json());
			}
		});
	}, []);

	return { ticketCategories, ticketList };
}
