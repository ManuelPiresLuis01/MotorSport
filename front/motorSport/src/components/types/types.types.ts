import type { IconType } from "react-icons";
import type { MotoCard } from "../../page/types/type.type";


export interface activePage {
  name: string;
  
}

export type DashboardCardProps = {
  title: string;
  value: string | number;
  icon: IconType;
  color?: string;

};

export type MotoCardProps = {
  moto: MotoCard
};
