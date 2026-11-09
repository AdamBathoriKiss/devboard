import { useEffect } from "react";
import type { Ticket } from "../types/ticket";

export default function useTicketValidation(form: Ticket) {
	const errors: string[] = [];

	useEffect(() => {
		for (const [key, value] of Object.entries(form)) {
			switch (key) {
				case "title":
				case "description":
				case "responsible":
					(value === "" || value === null) && errors.push(`A ${key} mező kitöltése kötelező.`);
					break;

				default:
					break;
			}
		}
	});

	return { errors };
}
