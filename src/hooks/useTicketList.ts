import type { TicketCategory } from "../types/ticket";
import { useAppSelector } from "../store/hooks";

const ticketCategories: TicketCategory[] = [
    { type: "todo", label: "Todo" },
    { type: "in_progress", label: "Folyamatban" },
    { type: "closed", label: "Kész" },
];

export default function useTicketList() {
    const ticketList = useAppSelector((state) => state.tickets.ticketList);
    const isLoading = useAppSelector((state) => state.tickets.isLoading);
    const error = useAppSelector((state) => state.tickets.error);

    return { ticketCategories, ticketList, isLoading, error };
}
