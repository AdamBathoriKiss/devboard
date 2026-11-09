import { renderHook } from "@testing-library/react";
import type { Ticket } from "../types/ticket";
import useTicketSubmit from "../hooks/useTicketSubmit";

const validTicket: Ticket = {
    id: "22632",
    title: "Teszt",
    description: "Teszt",
    responsible: "én",
    status: "todo",
    priority: "low",
    updatedAt: "2026-11-09"
}

const { result } = renderHook(() => useTicketSubmit(validTicket, "create"));
expect(result.current.submitError).toEqual([`A title mező kitöltése kötelező.`,`A description mező kitöltése kötelező.`,`A responsible mező kitöltése kötelező.`, ]);