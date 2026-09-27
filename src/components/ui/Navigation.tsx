import React from "react";
import {ThemeContext} from "../../ThemeProvider.tsx";
import Button from "../shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navigation(): React.JSX.Element {
    const {theme, setTheme} = React.useContext(ThemeContext);
    const sunIcon = <FontAwesomeIcon icon={faSun} />;
    const moonIcon = <FontAwesomeIcon icon={faMoon} />;
    const [icon, setIcon] = React.useState(theme === "light" ? sunIcon : moonIcon);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        setIcon(theme === "light" ? moonIcon : sunIcon);
    };

    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Button
                        icon={icon}
                        className="componentBox btn-theme"
                        onClick={toggleTheme}
                    />
                </li>
            </ul>
        </nav>
    );
}
