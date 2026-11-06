import type React from "react";
import { useParams } from "react-router";
import { useAppSelector } from "../../store/hooks";
import TicketForm from "./TicketForm";

export type TicketDetailProps = {
    type: "edit" | "create";
};

export default function TicketDetail({
    type,
}: TicketDetailProps): React.JSX.Element {
    const ticketId = useParams();
    const ticketList = useAppSelector((state) => state.tickets.ticketList);
    const isLoading = useAppSelector((state) => state.tickets.isLoading);
    const currentTicket =
        ticketList.find((item) => item.id === ticketId.id) ?? null;

    if (isLoading) {
        return (
            <div className="content">
                <div className="card">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        );
    } else if (type === "edit" && currentTicket === null) {
        return (
            <div className="content">
                <div className="card">
                    <h3>A keresett ticket nem található!</h3>
                </div>
            </div>
        );
    } else {
        return (
            <TicketForm key={type} type={type} currentTicket={currentTicket} />
        );
    }
}
