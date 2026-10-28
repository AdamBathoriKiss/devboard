import { http, HttpResponse } from "msw";
import { mockTickets } from "./mockTickets";

export const handlers = [
	http.get("/api/tickets", async () => {
		//delay csak tesztelésre - ha újra kell, akkor msw import:  await delay(2000);
		return HttpResponse.json(mockTickets);
        //hibás response csak tesztelésre: return HttpResponse.json(null, { status: 500 });
	}),
];
