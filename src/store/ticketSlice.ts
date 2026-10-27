import {
    createSlice,
    createAsyncThunk,
    type PayloadAction,
} from "@reduxjs/toolkit";
import type { Ticket } from "../types/ticket";

export interface TicketState {
    ticketList: Ticket[];
    isLoading: boolean;
    error: string | null;
}

export const fetchTicketList = createAsyncThunk("tickets/list", async ():Promise<Ticket[]> => {
    const response = await fetch("/api/tickets").then((res) => {
        if (!res.ok) throw new Error(`Hiba: ${res.status}`);
        return res.json();
    });
    return response;
});

const initialState: TicketState = {
    ticketList: [],
    isLoading: true,
    error: null,
};

export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        /* Tanultam belőle, marad */
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTicketList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchTicketList.fulfilled, (state, action) => {
            state.ticketList = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchTicketList.rejected, (state, action) => {
            state.error = action.error.message ?? "Váratlan hiba történt";
            state.isLoading = false;
        });
    },
});

export const { setLoading } = ticketSlice.actions;
export default ticketSlice.reducer;
