export type Ticket = {
    id: string;
    title: string;
    description: string;
    responsible: string;
    status: "open" | "in_progress" | "closed";
    updatedAt: Date;
    gitHubLink?: string;
};