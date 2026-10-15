import React from "react";
import type { Ticket, TicketCategory } from "../types/ticket";

export default function useTicketList() {
	const ticketCategories: TicketCategory[] = [
		{ type: "todo", label: "Todo" },
		{ type: "in_progress", label: "Folyamatban" },
		{ type: "closed", label: "Kész" },
	];

	const [ticketList, setTicketList] = React.useState<Ticket[]>([]);
	const [isLoading, setIsLoading] = React.useState(false);
	const [error, setError] = React.useState<string | null>();

	const getTicketList = () => {
		setIsLoading(true);
		fetch("/api/tickets")
			.then(async (res) => {
				if (!res.ok) throw new Error(`Hiba: ${res.status}`);
				setTicketList(await res.json());
			}).catch((err)=> {
				setError(err.message)
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	React.useEffect(() => {
		getTicketList();
	}, []);

	return { ticketCategories, ticketList, isLoading, error };
}
