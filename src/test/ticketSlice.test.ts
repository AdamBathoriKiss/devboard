import { useAppSelector } from "../store/hooks";
import { setSearchParam } from "../store/ticketSlice";

describe("ticketSlice teszt", () => {
	it("Ticketlist is empty at first start.", () => {
		const ticketList = useAppSelector((state) => state.tickets.ticketList);
		expect(ticketList).toEqual([]);
	});
	it("SearchParam changes", () => {
		expect(setSearchParam("login")).toBe("login");
	});
});
