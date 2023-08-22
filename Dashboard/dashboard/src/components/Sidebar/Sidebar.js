import React from "react";
import { BsGear, BsFillTagsFill } from "react-icons/bs";
import { FiPieChart } from "react-icons/fi";
import { LuCalendarClock } from "react-icons/lu";
import { BiUserCircle } from "react-icons/bi";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">Board.</div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="#">
            <FiPieChart className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsFillTagsFill className="icon" /> Transactions
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <LuCalendarClock className="icon" /> Schedules
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BiUserCircle className="icon" /> Users
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="#">
            <BsGear className="icon" /> Setting
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <p>Help Center</p>
        <p>Contact Us</p>
      </div>
    </aside>
  );
}

export default Sidebar;
