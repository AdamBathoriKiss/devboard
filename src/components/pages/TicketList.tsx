import type React from "react";
import useTicketList from "../../hooks/useTicketList";
import TicketBox from "../ui/TicketBox";


export default function TicketList(): React.JSX.Element {
	const { ticketCategories, ticketList } = useTicketList();

	return (
		<div className="content">
			<div className="ticketList">
				{ticketCategories.map((category) => {
					const columnTickets = ticketList.filter((ticket) => category.type === ticket.status);

					return (
						<div className="currentTickets" key={category.type}>
							<h5>{category.label}</h5>
							{columnTickets.map((ticket) => (
								<TicketBox ticket={ticket} key={ticket.id}/>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
}
