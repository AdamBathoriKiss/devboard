import { delay, http, HttpResponse } from "msw";
import { mockTickets } from "./mockTickets";

export const handlers = [
	http.get("/api/tickets", async () => {
		await delay(2000);
		//return HttpResponse.json(mockTickets);
        return HttpResponse.json(null, { status: 500 });
	}),
];
