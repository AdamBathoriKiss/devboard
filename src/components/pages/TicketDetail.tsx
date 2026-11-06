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
    const currentTicket = ticketList.find((item) => item.id === ticketId.id) ?? null;

    return <TicketForm type={type} currentTicket={currentTicket}/>
}
