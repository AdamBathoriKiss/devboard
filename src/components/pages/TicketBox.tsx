import type React from "react";
import { useNavigate } from "react-router";
import type { Ticket } from "../../types/ticket";

type TicketBoxProps = { ticket: Ticket };

export default function TicketBox({ ticket }: TicketBoxProps): React.JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/ticket/${ticket.id}`)}>
      <p>{ticket.title}</p>
    </div>
  );
}