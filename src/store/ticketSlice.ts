import { createSlice } from "@reduxjs/toolkit";
import type { Ticket } from "../types/ticket";

export interface TicketState {
    ticketList: Ticket[],
    isLoading: boolean,
    error: string | null,
}

const initialState: TicketState = {
    ticketList: [],
    isLoading: true,
    error: null
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers:{
        setLoading: state => {
            state.isLoading = !state.isLoading
        }
    }
})

export const {setLoading} = ticketSlice.actions;
export default ticketSlice.reducer;