import { http, HttpResponse } from "msw";
import { mockTickets } from "./tickets";

export const handlers = [
    http.get("/api/tickets", () => HttpResponse.json(mockTickets)),
]