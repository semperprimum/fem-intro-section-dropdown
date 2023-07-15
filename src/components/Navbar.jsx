import { NavItem, DropdownItem, DropdownMenu } from "./index.js";
import { ReactComponent as TodoIcon } from "../assets/images/icon-todo.svg";
import { ReactComponent as CalendarIcon } from "../assets/images/icon-calendar.svg";
import { ReactComponent as RemindersIcon } from "../assets/images/icon-reminders.svg";
import { ReactComponent as PlanningIcon } from "../assets/images/icon-planning.svg";

export function Navbar(props) {
  return (
    <nav className="navbar" {...props}>
      <ul className="navbar__nav" role="list">
        <NavItem name="Features">
          <DropdownMenu stick="right">
            <DropdownItem icon={<TodoIcon />}>Todo Lst</DropdownItem>
            <DropdownItem icon={<CalendarIcon />}>Calendar</DropdownItem>
            <DropdownItem icon={<RemindersIcon />}>Reminders</DropdownItem>
            <DropdownItem icon={<PlanningIcon />}>Planning</DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem name="Company">
          <DropdownMenu stick="left">
            <DropdownItem>History</DropdownItem>
            <DropdownItem>Our Team</DropdownItem>
            <DropdownItem>Blog</DropdownItem>
          </DropdownMenu>
        </NavItem>
        <NavItem name="Careers" href="#" />
        <NavItem name="About" href="#" />
      </ul>
      <div className="navbar__buttons">
        <a href="#" className="btn__login">
          Login
        </a>
        <a href="#" className="btn__register">
          Register
        </a>
      </div>
    </nav>
  );
}
