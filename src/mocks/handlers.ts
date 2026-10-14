import { http, HttpResponse } from "msw";
import { mockTickets } from "./mockTickets";

export const handlers = [
    http.get("/api/tickets", () => HttpResponse.json(mockTickets)),
]