export type TicketStatus = "open" | "in_progress" | "closed";
export type TicketPriority = "low" | "medium" | "high";

export type Ticket = {
    id: string;
    title: string;
    description: string;
    responsible: string;
    status: TicketStatus;
    priority: TicketPriority;
    updatedAt: string;
    gitHubLink?: string;
    gitHubIssueNumber?: number;
};