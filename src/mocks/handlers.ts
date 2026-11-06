import { http, HttpResponse } from "msw";
import { mockTickets } from "./mockTickets";
import type { Ticket } from "../types/ticket";

export const handlers = [
    http.get("/api/tickets", async () => {
        //delay csak tesztelésre - ha újra kell, akkor msw import:  await delay(2000);
        return HttpResponse.json(mockTickets);
        //hibás response csak tesztelésre: return HttpResponse.json(null, { status: 500 });
    }),
    http.post("/api/tickets/create", async ({ request }) => {
        const sentTicket = (await request.json()) as Ticket; // 1. a beküldött adat

        const newTicket: Ticket = {
            ...sentTicket, // minden, amit a form küldött
            id: crypto.randomUUID().split('-')[0], // 2. új, egyedi azonosító
            updatedAt: new Date().toISOString(), // 3. most, ISO formátumban
        };

        return HttpResponse.json(null, { status: 201 }); // 4. mit küldünk vissza?
    }),
    http.patch("/api/tickets/edit/:id", async ({ request }) => {
        const formData = await request.formData();
		console.log(formData)
    }),
];
