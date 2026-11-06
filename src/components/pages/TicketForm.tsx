import useTicketHandling from "../../hooks/useTicketHandling";
import type { Ticket } from "../../types/ticket";
import type { TicketDetailProps } from "./TicketDetail";

interface TicketDetail {
    type: TicketDetailProps['type'],
    currentTicket: Ticket | null
}

export default function TicketForm({type,currentTicket}: TicketDetail) {
    const {form, handleChanges, handleSubmit} = useTicketHandling(currentTicket, type);
    return (
        <div className="content">
            <div className="card">
                {type === "edit" ? (
                    <h3># {form.id} szerkesztése </h3>
                ) : (
                    <h3>Ticket létrehozása</h3>
                )}
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
                    <input
                        type="text"
                        name="priority"
                        value={form.priority}
                        onChange={handleChanges}
                    />

                    <label htmlFor="updatedAt">Frissítve</label>
                    <input
                        type="text"
                        name="updatedAt"
                        value={form.updatedAt}
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

                    <button className="" onClick={handleSubmit}>
                        Mentés
                    </button>
                </div>
            </div>
        </div>
    );
}
