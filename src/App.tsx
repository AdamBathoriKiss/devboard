import React from "react";
import Navigation from "./components/ui/Navigation";
import TicketList from "./components/ui/TicketList";

function App() {
	return (
		<React.Fragment>
			<Navigation />
            <TicketList/>
		</React.Fragment>
	);
}
export default App;
