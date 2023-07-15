export function DropdownMenu(props) {
  return (
    <div className="dropdown" style={{ [props.stick]: 0 }}>
      {props.children}
    </div>
  );
}
