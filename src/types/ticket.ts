export type TicketStatus = "todo" | "in_progress" | "closed";
export type TicketPriority = "low" | "medium" | "high";

export interface TicketCategory {
        type: TicketStatus;
        label: string;
}

export type Ticket = {
    id: string | number;
    title: string;
    description: string;
    responsible: string;
    status: TicketStatus;
    priority: TicketPriority;
    updatedAt: string;
    gitHubLink?: string;
    gitHubIssueNumber?: number;
};