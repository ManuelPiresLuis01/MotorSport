import Style from "./card.module.css";
import type { DashboardCardProps, MotoCardProps } from "../types/types.types";
import SaleModal from "../../page/sale/salemodal";
import { useState } from "react";

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  color = "#4a90e2",
}) => {
  return (
    <div className={Style.card}>
      <div className={Style.icon} style={{ color }}>
        <Icon size={50} />
      </div>
      <div className={Style.content}>
        <span className={Style.title}>{title}</span>
        <strong className={Style.value}>{value}</strong>
      </div>
    </div>
  );
};

const MotoCard: React.FC<MotoCardProps> = ({ moto }) => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <div className={Style.motocard}>
      <SaleModal
        motoId={moto.id}
        status={status}
        setStatus={setStatus}
      />
      {moto.photo && (
        <img
          src={
            typeof moto.photo === "string"
              ? moto.photo
              : URL.createObjectURL(moto.photo)
          }
          alt={moto.model}
          className={Style.image}
        />
      )}
      <div className={Style.details}>
        <h3>{moto.model}</h3>
        <p>
          <strong>Marca:</strong> {moto.brand}
        </p>
        <p>
          <strong>Preço:</strong> {moto.price} Kz
        </p>
        <p>
          <strong>Status:</strong> {moto.status}
        </p>
      </div>
      <button onClick={()=> setStatus(true)}>Vender</button>
    </div>
  );
};

export { MotoCard, DashboardCard };
