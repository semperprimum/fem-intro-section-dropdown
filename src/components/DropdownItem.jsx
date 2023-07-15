export function DropdownItem(props) {
  return (
    <a href="#" className="dropdown__item">
      {props.icon && <span className="dropdown__item__icon">{props.icon}</span>}
      {props.children}
    </a>
  );
}
