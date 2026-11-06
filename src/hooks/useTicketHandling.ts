import React, { useState } from "react";
import type { Ticket } from "../types/ticket";
import type { TicketDetailProps } from "../components/pages/TicketDetail";
import { useAppDispatch } from "../store/hooks";
import { createTicket, editTicket } from "../store/ticketSlice";
import { useNavigate } from "react-router";

const defaultTicket: Ticket = {
    id: "",
    title: "",
    description: "",
    responsible: "",
    status: "todo",
    priority: "low",
    updatedAt: new Date().toISOString(),
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
    const [submitError, setSubmitError] = useState<string | null>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChanges = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => (prev ? { ...prev, [name]: value } : prev));
    };

    const handleSubmit = () => {
        if (type === "create") {
            dispatch(createTicket(form))
                .unwrap()
                .then(() => navigate("/"))
                .catch((err) => setSubmitError(err.message));
        }

        if (type === "edit") {
            dispatch(editTicket(form))
                .unwrap()
                .then(() => navigate("/"))
                .catch((err) => setSubmitError(err.message));
        }
    };

    return { form, handleChanges, handleSubmit, submitError };
}
