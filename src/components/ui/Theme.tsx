import type React from "react";
import Button from "../shared/Button";
import useNavigation from "../../hooks/useNavigation";

export default function Theme(): React.JSX.Element {
	const { icon, toggleTheme } = useNavigation();
	return <Button icon={icon} className="componentBox btn-theme" onClick={toggleTheme} />;
}
