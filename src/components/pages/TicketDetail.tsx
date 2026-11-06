import type React from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import useTicketHandling from "../../hooks/useTicketHandling";

type TicketDetailProps = {
    type: "edit" | "create";
};

export default function TicketDetail({
    type,
}: TicketDetailProps): React.JSX.Element {
    const ticketId = useParams();
    const ticketList = useAppSelector((state) => state.tickets.ticketList);
    const currentTicket =
        ticketList.find((item) => item.id === ticketId.id) ?? null;
    const { form, handleChanges, handleSubmit } = useTicketHandling({
        currentTicket
    }, type);

	if(form === undefined) {
		return <h3>Nem található adat</h3>
	}
    return (
        <div className="content">
            <div className="card">
                <h3># {form.id} szerkesztése </h3>
                <div className="form">
                    <label htmlFor="title">Cím</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChanges}
                    />

                    <label htmlFor="description">Leírás</label>
                    <input
                        type="text"
                        name="description"
                        value={form.description}
                        onChange={handleChanges}
                    />

                    <label htmlFor="responsible">Felelős</label>
                    <input
                        type="text"
                        name="responsible"
                        value={form.responsible}
                        onChange={handleChanges}
                    />

                    <label htmlFor="status">Állapot</label>
                    <input
                        type="text"
                        name="status"
                        value={form.status}
                        onChange={handleChanges}
                    />

                    <label htmlFor="priority">Prioritás</label>
                    <input type="text" name="priority" 
                        value={form.priority}
                        onChange={handleChanges}/>

                    <label htmlFor="updatedAt">Frissítve</label>
                    <input
                        type="text"
                        name="updatedAt"
                        value={
                            form.updatedAt
                        }
                        disabled={true}
                    />

                    <label htmlFor="gitHubLink">Github link</label>
                    <input
                        type="text"
                        name="gitHubLink"
                        value={form.gitHubLink}
                        onChange={handleChanges}
                    />

                    <label htmlFor="gitHubIssueNumber">
                        Github feladat szám
                    </label>
                    <input
                        type="text"
                        name="gitHubIssueNumber"
                        value={form.gitHubIssueNumber}
                        onChange={handleChanges}
                    />

                    <button className="" onClick={handleSubmit}>Mentés</button>
                </div>
            </div>
        </div>
    );
}
