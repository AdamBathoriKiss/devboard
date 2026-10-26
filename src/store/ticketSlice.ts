import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
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
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
})

export const {setLoading} = ticketSlice.actions;
export default ticketSlice.reducer;