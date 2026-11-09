import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { createTicket, editTicket } from "../store/ticketSlice";
import { useNavigate } from "react-router";
import type { Ticket } from "../types/ticket";
import type { TicketDetailProps } from "../components/pages/TicketDetail";
import useTicketValidation from "./useTicketValidation";

export default function useTicketSubmit(form: Ticket, type: TicketDetailProps["type"]) {
	const [submitError, setSubmitError] = useState<string[] | null>(null);
	const { errors } = useTicketValidation(form);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSubmit = () => {
		if (errors && errors?.length > 0) {
			setSubmitError(errors)
            return
		}

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

	return { handleSubmit, submitError, setSubmitError };
}
