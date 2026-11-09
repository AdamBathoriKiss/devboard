import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { createTicket, editTicket } from "../store/ticketSlice";
import { useNavigate } from "react-router";
import type { Ticket } from "../types/ticket";
import type { TicketDetailProps } from "../components/pages/TicketDetail";

export default function useTicketSubmit(form: Ticket, type: TicketDetailProps['type']) {
	const [submitError, setSubmitError] = useState<string | null>();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

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

    return {handleSubmit, submitError}
}
