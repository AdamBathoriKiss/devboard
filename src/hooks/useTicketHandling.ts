import React, { useEffect, useState } from "react";
import type { Ticket } from "../types/ticket";

const defaultTicket: Ticket = {
    id: "",
    title: "",
    description: "",
    responsible: "",
    status: "todo",
    priority: "low",
    updatedAt: new Date(),
};

export default function useTicketHandling({
    currentTicket
}: {
    currentTicket: Ticket | null;
}, type : string) {
    const [form, setForm] = useState<Ticket>(defaultTicket);

    useEffect(() => {
        if (currentTicket && type === 'edit') {
            setForm(currentTicket);
        }else {
            setForm(defaultTicket)
        }
    }, [currentTicket]);

    const handleChanges = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => (prev ? { ...prev, [name]: value } : prev));
    };

    const handleSubmit = () => {};

    return { form, handleChanges, handleSubmit };
}
