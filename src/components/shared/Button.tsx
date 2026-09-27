interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({label, icon, className, onClick}: ButtonProps): React.JSX.Element {

  return (
    <button className={className || "defaultBtn"} onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
}
