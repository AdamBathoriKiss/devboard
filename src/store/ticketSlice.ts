import { createSlice } from "@reduxjs/toolkit";
import type { Ticket, TicketCategory } from "../types/ticket";

export interface TicketState {
    ticketList: Ticket[],
    isLoading: boolean,
    error: string | null,
}

const initialState: TicketState = {
    ticketList: [],
    isLoading: false,
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