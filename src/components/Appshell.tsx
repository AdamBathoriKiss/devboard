import { Outlet } from "react-router";
import Navigation from "./ui/Navigation";
import React, { useEffect } from "react";
import Theme from "./ui/Theme";
import { fetchTicketList } from "../store/ticketSlice";
import { useAppDispatch } from "../store/hooks";

export default function Appshell(): React.JSX.Element {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTicketList());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Navigation />
            <Outlet />
            <Theme />
        </React.Fragment>
    );
}
