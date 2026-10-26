import type React from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import { RouterProvider } from "react-router";
import { router } from "./Router";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App(): React.JSX.Element {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    );
}
export default App;
