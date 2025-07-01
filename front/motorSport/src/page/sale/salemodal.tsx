import { useState } from "react";
import Style from "../settings/modal.module.css";
import style from "../register/style.module.css";
import form from "./modal.module.css"
import type { Sale, SaleProps} from "../types/type.type";

const SaleModal = (p: SaleProps) => {
  const [formData, setFormData] = useState<Sale>({
    motoId: "",
    buyerName: "",
    buyerEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ ...formData, motoId: p.motoId });
    p.setStatus(false);
    console.log("vendido:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        p.status
          ? `${style.formContainer} ${Style.formCenter} ${form.form}`
          : Style.formInative
      }
    >
      <h2>Vender</h2>

      <input
        type="text"
        name="buyerName"
        value={formData.buyerName}
        placeholder="Nome do Comprador"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="buyerEmail"
        value={formData.buyerEmail}
        placeholder="Email do comprador"
        onChange={handleChange}
        required
      />

      
      <button type="submit">Vender</button>
      <button type="button" style={{backgroundColor:"red"}} onClick={() => p.setStatus(false)}>
        Fechar
      </button>
    </form>
  );
};

export default SaleModal;
