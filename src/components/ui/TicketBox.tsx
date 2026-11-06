import type React from "react";
import { useNavigate } from "react-router";
import type { Ticket } from "../../types/ticket";
import { Formatter } from "../../handlers/dateFormatter";

type TicketBoxProps = { ticket: Ticket };

export default function TicketBox({ ticket }: TicketBoxProps): React.JSX.Element {
	const navigate = useNavigate();

	return (
		<div className="card" onClick={() => navigate(`/ticket/${ticket.id}`)}>
			<div className="card-details">
				<p>{ticket.id}</p>
				<p>{ticket.priority}</p>
			</div>
			<div className="card-details">
				<p>{ticket.title}</p>
			</div>
			<div className="card-details">
				<p>{Formatter.dateFormatter(ticket.updatedAt)}</p>
				{ticket.gitHubIssueNumber && <p># {ticket.gitHubIssueNumber}</p>}
			</div>
		</div>
	);
}
