import type { activePage } from "../types/types.types";
import Style from "./menu.module.css";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../mock/mock.mock";

const Menu = (props: activePage) => {
  const { name } = props;
const navigate = useNavigate();

const handleNavigation = (label: string) => {
  if (label.toLowerCase() === "sair" || label.toLowerCase() === "logout") {
    localStorage.clear(); 
    navigate("/login");   
    return;
  }

  const item = menuItems.find(item => item.label === label);
  if (item && item.path) {
    navigate(item.path);
  }
};
 

  return (
    <div className={Style.menuContainer}>
      <div className={Style.avatar}></div>
      <h1 className={Style.name}>Manuel Luis</h1>
      <ul className={Style.menuList}>
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`${Style.menuItem} ${name === item.label ? Style.active : ""}`}
            onClick={() => handleNavigation(item.label)}
          >
            <span className={Style.icon}>{item.icon && <item.icon />}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

 