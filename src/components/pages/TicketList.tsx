import type React from "react";
import Ticket from "./TicketDetail";
import type { TicketCategory } from "../../types/ticket";

export default function TicketList(): React.JSX.Element {
	const ticketCategories:TicketCategory[] = [{type: "todo", label:"Todo"},{type: "in_progress", label:"Folyamatban"},{type: "closed", label:"Kész"}];

	return (
		<div className="content">
			<div className="ticketList">
			{ticketCategories.map((category)=>
				<div className="currentTickets" key={category.type}>
					<h5>{category.label}</h5>
					<Ticket type="edit"/> {/* Később a ticketek listázása */}
				</div>
			)}
			</div>
		</div>
	);
}
