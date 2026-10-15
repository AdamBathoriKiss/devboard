import { createBrowserRouter } from "react-router";
import Appshell from "./components/Appshell";
import TicketList from "./components/pages/TicketList";
import ErrorPage from "./components/pages/ErrorPage";
import TicketDetail from "./components/pages/TicketDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Appshell/>,
        children: [
            {index: true, element: <TicketList/>},
            {path:"ticket/add", element: <TicketDetail type="create"/>},
            {path:"ticket/:id", element: <TicketDetail type="edit"/>}
        ],
        errorElement: <ErrorPage/>
    }
])