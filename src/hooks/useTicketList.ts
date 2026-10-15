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
	const [error, setError] = React.useState();

	const getTicketList = () => {
		setIsLoading(true);
		fetch("/api/ticket")
			.then(async (res) => {
				if (!res.ok) setError(res.status);
				setTicketList(await res.json());
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
