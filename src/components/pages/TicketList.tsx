import type React from "react";
import Ticket from "./TicketDetail";

export default function TicketList(): React.JSX.Element {
	const ticketCategories = ["Todo", "Folyamatban", "Kész"];

	return (
		<div className="content">
			<div className="ticketList">
			{ticketCategories.map((category)=>
				<div className="currentTickets" key={category}>
					<h5>{category}</h5>
					<Ticket type="edit"/> {/* Később a ticketek listázása */}
				</div>
			)}
			</div>
		</div>
	);
}
