import type React from "react";

type TicketDetail = {
	type : "edit" | "create"
}

export default function TicketDetail({ type }: TicketDetail): React.JSX.Element {
	if (type === "create") {
		return (
			<div className="content">
			<div className="card">
				<h3>Hozzáadás</h3>
			</div>
			</div>
		);
	} else {
		return (
			<div className="content">
			<div className="card">
				<h3>Szerkesztés</h3>
			</div>
			</div>
		);
	}
}
