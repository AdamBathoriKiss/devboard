import type React from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";

type TicketDetailProps = {
    type: "edit" | "create";
};

export default function TicketDetail({
    type,
}: TicketDetailProps): React.JSX.Element {
    const ticketId = useParams();
    const ticketList = useAppSelector((state) => state.tickets.ticketList);
    const currentTicket = ticketList.filter((item) => item.id === ticketId.id);

    console.log(currentTicket[0]);
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
                    <h3># {currentTicket[0].id} szerkesztése </h3>
                    <ul>
                        {currentTicket.map((item, key) => {
                            return <li>{item[key]}</li>;
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
