import type React from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";

type TicketDetailProps = {
	type: "edit" | "create";
};

export default function TicketDetail({ type }: TicketDetailProps): React.JSX.Element {
	const ticketId = useParams();
	const ticketList = useAppSelector((state) => state.tickets.ticketList)
	const currentTicket = ticketList.length !== 0 && ticketList.find((item) => item.id === ticketId.id);

	if (type === "edit") {
		if (!currentTicket) {
			return (
				<div className="content">
					<div className="card">
						<h3>A ticket a megadott ID-val nem található.</h3>
					</div>
				</div>
			);
		}
		return (
			<div className="content">
				<div className="card">
					<h3># {currentTicket.id} szerkesztése </h3>
					<div className="form">
						<label htmlFor="title">Cím</label>
						<input type="text" name="title" value={currentTicket.title} />

						<label htmlFor="description">Leírás</label>
						<input type="text" name="description" value={currentTicket.description} />

						<label htmlFor="responsible">Felelős</label>
						<input type="text" name="responsible" value={currentTicket.responsible} />

						<label htmlFor="status">Állapot</label>
						<input type="text" name="status" value={currentTicket.status} />

						<label htmlFor="priority">Prioritás</label>
						<input type="text" name="priority" value={currentTicket.priority} />

						<label htmlFor="updatedAt">Frissítve</label>
						<input type="text" name="updatedAt" value={currentTicket.updatedAt} />

						<label htmlFor="gitHubLink">Github link</label>
						<input type="text" name="gitHubLink" value={currentTicket.gitHubLink} />

						<label htmlFor="gitHubIssueNumber">Github feladat szám</label>
						<input type="text" name="gitHubIssueNumber" value={currentTicket.gitHubIssueNumber} />
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="content">
				<div className="card">
					<div className="form">
						<label htmlFor="title">Cím</label>
						<input type="text" name="title" />

						<label htmlFor="description">Leírás</label>
						<input type="text" name="description" />

						<label htmlFor="responsible">Felelős</label>
						<input type="text" name="responsible" />

						<label htmlFor="status">Állapot</label>
						<input type="text" name="status" />

						<label htmlFor="priority">Prioritás</label>
						<input type="text" name="priority" />

						<label htmlFor="updatedAt">Frissítve</label>
						<input type="text" name="updatedAt" />

						<label htmlFor="gitHubLink">Github link</label>
						<input type="text" name="gitHubLink" />

						<label htmlFor="gitHubIssueNumber">Github feladat szám</label>
						<input type="text" name="gitHubIssueNumber" />
					</div>
				</div>
			</div>
		);
	}
}
