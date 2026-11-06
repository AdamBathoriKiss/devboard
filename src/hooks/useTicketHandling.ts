import React, { useState } from "react";
import type { Ticket } from "../types/ticket";
import type { TicketDetailProps } from "../components/pages/TicketDetail";

const defaultTicket: Ticket = {
    id: "",
    title: "",
    description: "",
    responsible: "",
    status: "todo",
    priority: "low",
    updatedAt: new Date().toISOString().replace('T', ' ').split('.')[0],
};

export default function useTicketHandling(
    currentTicket: Ticket | null,
    type: TicketDetailProps["type"],
) {
    const [form, setForm] = useState<Ticket>(
        type === "edit" && currentTicket !== null
            ? currentTicket
            : defaultTicket,
    );

    const handleChanges = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => (prev ? { ...prev, [name]: value } : prev));
    };

    const handleSubmit = () => {};

    return { form, handleChanges, handleSubmit };
}
