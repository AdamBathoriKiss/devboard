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
console.log(ticketList)
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
                    <h3>Hozzáadás</h3>
                </div>
            </div>
        );
    }
}
