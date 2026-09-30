import type React from "react";
import Ticket from "./Ticket";

export default function TicketList(): React.JSX.Element {
	return (
		<div className="content">
			<div className="ticketList">
				<div className="currentTickets">
					<h5>Todo</h5>
                    <Ticket/>
				</div>
				<div className="currentTickets">
					<h5>Folyamatban</h5>
                    <Ticket/>
                    
                    <Ticket/>
				</div>
				<div className="currentTickets">
					<h5>Kész</h5>
                    <Ticket/>
                    
                    <Ticket/>
				</div>
			</div>
		</div>
	);
}
