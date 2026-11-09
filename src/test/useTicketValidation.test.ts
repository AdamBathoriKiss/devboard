import { renderHook } from "@testing-library/react";
import type { Ticket } from "../types/ticket";
import useTicketValidation from "../hooks/useTicketValidation";

const validTicket: Ticket = {
    id: "22632",
    title: "Teszt",
    description: "Teszt",
    responsible: "én",
    status: "todo",
    priority: "low",
    updatedAt: "2026-11-09"
}

describe("useTicketValidation", () => {
    it("üres mezőkre 3 hiba", () => {
        const emptyTicket = { ...validTicket, title: "", description: "", responsible: "" };
        const { result } = renderHook(() => useTicketValidation(emptyTicket));
        expect(result.current.errors).toHaveLength(3);
    });

    it("kitöltött ticketre 0 hiba", () => {
        const { result } = renderHook(() => useTicketValidation(validTicket));
        expect(result.current.errors).toHaveLength(0);
    });
});