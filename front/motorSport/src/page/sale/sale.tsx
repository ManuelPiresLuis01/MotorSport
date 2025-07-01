import Style from "../dashboard/dashboard.module.css";
import Menu from "../../components/Asside/menu";
import { motas } from "../../components/mock/mock.mock";
import { MotoCard } from "../../components/card/card";

const Sale = () => {
  return (
    <div className={Style.dashboardContainer}>
      <Menu name="Vender" />
      <div className={Style.content}>
        <div className={Style.motoList}>
          {motas.map((moto, index) => (
            <MotoCard key={index} moto={moto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
