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

const fetchTicketList = createAsyncThunk(
    'tickets/list',
    async () => {
        const response = await fetch('/api/tickets').then((res)=> {
            if (!res.ok) throw new Error(`Hiba: ${res.status}`);
				return res.json()
        }).catch((err)=> {
            return err.message
        })
        return response.formData
    }
)

/*

 fetch("/api/tickets")
			.then(async (res) => {
				if (!res.ok) throw new Error(`Hiba: ${res.status}`);
				setTicketList(await res.json());
			}).catch((err)=> {
				setError(err.message)
			})
			.finally(() => {
				setIsLoading(false);
			});

*/

const initialState: TicketState = {
    ticketList: [],
    isLoading: true,
    error: null,
};

export const ticketSlice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTicketList.fulfilled, (state, action)=>{
            if (!state.error) throw new Error(`Hiba:`);
            state.ticketList = action.payload;
            setLoading(false)
        });
        builder.addCase(fetchTicketList.rejected, (state,action)=>{
            state.error = action.error.toString()
        });
    }
});

export const { setLoading } = ticketSlice.actions;
export default ticketSlice.reducer;
