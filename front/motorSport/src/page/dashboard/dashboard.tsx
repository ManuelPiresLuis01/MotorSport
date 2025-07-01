import Style from "./dashboard.module.css";
import Menu from "../../components/Asside/menu";
import { DashboardCard } from "../../components/card/card";
import {
  FaMotorcycle,
  FaMoneyBillWave,
  FaShoppingCart,
  FaPlusCircle,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className={Style.dashboardContainer}>
      <Menu name="Dashboard" />
      <div className={Style.content}>
        <DashboardCard
          title="Motas em estoque"
          value={23}
          icon={FaMotorcycle}
          color="#4a90e2"
        />
        <DashboardCard
          title="Receita total"
          value="5.200.000 Kz"
          icon={FaMoneyBillWave}
          color="#27ae60"
        />
        <DashboardCard
          title="Vendas realizadas"
          value={12}
          icon={FaShoppingCart}
          color="#f39c12"
        />
        <DashboardCard
          title="Novas motas"
          value={5}
          icon={FaPlusCircle}
          color="#9b59b6"
        />
      </div>
    </div>
  );
};

export default Dashboard;
