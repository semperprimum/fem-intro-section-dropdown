import { useState } from "react";
import { ReactComponent as ArrowUpIcon } from "../assets/images/icon-arrow-up.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/images/icon-arrow-down.svg";

export function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="navbar__item">
      {props.href ? (
        <a className="navbar__button" href={props.href}>
          {props.name}
        </a>
      ) : (
        <button className="navbar__button" onClick={() => setOpen(!open)}>
          {props.name}
          {open && props.children ? (
            <ArrowUpIcon />
          ) : !open && props.children ? (
            <ArrowDownIcon />
          ) : (
            ""
          )}
        </button>
      )}

      {open && props.children}
    </li>
  );
}
