import { createBrowserRouter } from "react-router";
import Appshell from "./components/Appshell";
import TicketList from "./components/pages/TicketList";
import Ticket from "./components/pages/TicketDetail";
import ErrorPage from "./components/pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Appshell/>,
        children: [
            {index: true, element: <TicketList/>},
            {path:"ticket/add", element: <Ticket type="create"/>},
            {path:"ticket/:id", element: <Ticket type="edit"/>}
        ],
        errorElement: <ErrorPage/>
    }
])