import type React from "react";
import { useNavigate } from "react-router";
import type { Ticket } from "../../types/ticket";

type TicketBoxProps = { ticket: Ticket };

export default function TicketBox({ ticket }: TicketBoxProps): React.JSX.Element {
	const navigate = useNavigate();

  const dateFormatter = (updatedAt: string) => {
        return new Date(updatedAt);
  }

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
				<p>{ticket.updatedAt}</p>
				<p>{ticket.gitHubIssueNumber}</p>
			</div>
		</div>
	);
}
