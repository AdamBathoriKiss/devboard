import type React from "react";

interface Ticket {
    type: "create" | "edit";
}

export default function TicketDetail({type}: Ticket): React.JSX.Element{

    if(type === "create") {
        return (
            <div className="card">
                <h3>Hozzáadás</h3>
            </div>
        )
    }else {
        return (
            <div className="card">

                <h3>Szerkesztés</h3>
            </div>
        )
    }
    
}