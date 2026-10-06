import type React from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import { RouterProvider } from "react-router";
import { router } from "./Router";


function App(): React.JSX.Element {
	return (
		<ThemeProvider>
			<RouterProvider router={router}/>
		</ThemeProvider>
	);
}
export default App;
