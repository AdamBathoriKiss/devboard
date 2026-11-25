import {
    createSlice,
    createAsyncThunk,
    type PayloadAction,
} from "@reduxjs/toolkit";
import type { Ticket } from "../types/ticket";

export interface TicketState {
    ticketList: Ticket[];
    searchParam: string;
    isLoading: boolean;
    error: string | null;
}

const url = import.meta.env.VITE_BASE_URL;

export const fetchTicketList = createAsyncThunk(
    "tickets/list",
    async (): Promise<Ticket[]> => {
        const response = await fetch(`${url}/api/tickets`).then((res) => {
            if (!res.ok) throw new Error(`Hiba: ${res.status}`);
            return res.json();
        });
        return response;
    },
);

export const createTicket = createAsyncThunk(
    "tickets/create",
    async (postData: Ticket): Promise<Ticket> => {
        const response = await fetch(`${url}/api/tickets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        }).then((res) => {
            if (!res.ok) {
                return res.json().then((body) => {
                    throw new Error(body.message);
                });
            }
            return res.json();
        });
        return response;
    },
);

export const editTicket = createAsyncThunk(
    "tickets/edit/:id",
    async (postData: Ticket): Promise<Ticket> => {
        const response = await fetch(`${url}/api/tickets/${postData.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        }).then((res) => {
            if (!res.ok) throw new Error(`Hiba: ${res.status}`);
            return res.json();
        });
        return response;
    },
);

const initialState: TicketState = {
    ticketList: [],
    searchParam: "",
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
        setSearchParam: (state, action: PayloadAction<string>) => {
            state.searchParam = action.payload;
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
        builder.addCase(createTicket.fulfilled, (state, action) => {
            state.ticketList.push(action.payload);
            state.isLoading = false;
        });
        builder.addCase(editTicket.fulfilled, (state, action) => {
            const currentTicket = state.ticketList.findIndex(
                (item) => item.id === action.payload.id,
            );
            state.ticketList[currentTicket] = action.payload;
            state.isLoading = false;
        });
    },
});

export const { setLoading, setSearchParam } = ticketSlice.actions;
export default ticketSlice.reducer;
