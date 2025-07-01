import {
  FaTachometerAlt,
  FaUserPlus,
  FaCog,
  FaSignOutAlt,
 FaShoppingCart,
} from "react-icons/fa";
import type { MotoCard } from "../../page/types/type.type";

export const menuItems = [
  { label: "Dashboard", icon: FaTachometerAlt,path: "/dashboard" },
  { label: "Registar", icon: FaUserPlus,path: "/register" },
  { label: "Vender", icon:  FaShoppingCart,path: "/sale" },
  { label: "Configurações", icon: FaCog,path: "/settings" },
  { label: "Sair", icon: FaSignOutAlt,path:"logout" },
];

export const motas:  MotoCard[] = [
  {
    model: "CBR 500R",
    brand: "Honda",
    price: "1.200.000",
    status: "Disponível",
    photo: "https://i.redd.it/j83yp2e98byd1.jpeg", 
  },{
    model: "CBR 500R",
    brand: "Honda",
    price: "1.200.000",
    status: "Disponível",
    photo: "https://i.redd.it/j83yp2e98byd1.jpeg", 
  },{
    model: "CBR 500R",
    brand: "Honda",
    price: "1.200.000",
    status: "Disponível",
    photo: "https://i.redd.it/j83yp2e98byd1.jpeg", 
  },{
    model: "CBR 500R",
    brand: "Honda",
    price: "1.200.000",
    status: "Disponível",
    photo: "https://i.redd.it/j83yp2e98byd1.jpeg", 
  },
];

export const users = [
  { username: "manuel.luis", email: "manuel@example.com", cargo: "Admin" },
  { username: "sara.santos", email: "sara@example.com", cargo: "Gestor" },
  { username: "pedro.paz", email: "pedro@example.com", cargo: "Operador" },
];