import type React from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import useTicketList from "../../hooks/useTicketList";

type TicketDetailProps = {
    type: "edit" | "create";
};

export default function TicketDetail({
    type,
}: TicketDetailProps): React.JSX.Element {
    const ticketId = useParams();
    const ticketList = useAppSelector((state) => state.tickets.ticketList).length === 0 ? useTicketList().ticketList : useAppSelector((state) => state.tickets.ticketList);
    const currentTicket = ticketList.find((item) => item.id === ticketId.id);
    
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
                    <ul>
                        {Object.entries(currentTicket).map(([key, value]) => {
                            return <li key={key}>{value}</li>;
                        })}
                    </ul>
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
