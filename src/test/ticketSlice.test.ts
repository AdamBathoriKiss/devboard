import { setSearchParam, ticketSlice } from "../store/ticketSlice";
import ticketReducer from '../store/ticketSlice'

describe("ticketSlice teszt", () => {
	it("Ticketlist is empty at first start.", () => {
		const ticketList = ticketSlice.getInitialState().ticketList;
		expect(ticketList).toEqual([]);
	});
	it("SearchParam changes", () => {
        const state = ticketReducer(undefined, setSearchParam('login'));
		expect(state.searchParam).toBe("login");
	});
});
