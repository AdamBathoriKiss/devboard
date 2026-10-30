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
    const currentTicket = ticketList.find((item) => item.id === ticketId.id);

    if(!currentTicket){
        return (
            <div className="content">
                <div className="card">
                    <h3>A ticket a megadott ID-val nem található.</h3>
                </div>
            </div>
        )
    }

    console.log(currentTicket);
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
                    <h3># {currentTicket?.id} szerkesztése </h3>
                    <ul>
                        {Object.entries(currentTicket).map(([key, value]) => {
                            return (<li key={key}>{value}</li>);
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
