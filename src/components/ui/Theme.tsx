import React from "react";
import Button from "../shared/Button";
import useTheme from "../../hooks/useTheme";
import iconlist from "../shared/iconlist";

export default function Theme(): React.JSX.Element {
    const {icons} = iconlist();
	const { theme,toggleTheme } = useTheme();
	return <Button icon={theme ==="dark" ? icons.moonIcon : icons.sunIcon} className="componentBox btn-theme" onClick={toggleTheme} />;
}
