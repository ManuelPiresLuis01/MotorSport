import { useState } from "react";
import type { MotoFormData } from "../types/type.type";
import style from "./style.module.css";

const MotoForm = () => {
  const [formData, setFormData] = useState<MotoFormData>({
    model: "",
    brand: "",
    price: "",
    photo: null,
    status: "Disponível",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Moto registrada:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <h2>Registrar Mota</h2>

      <input
        type="text"
        name="model"
        value={formData.model}
        placeholder="Modelo"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="brand"
        value={formData.brand}
        placeholder="Marca"
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        value={formData.price}
        placeholder="Preço"
        onChange={handleChange}
        required
      />

      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Disponível">Disponível</option>
        <option value="Vendida">Vendida</option>
      </select>

         <input
        type="file"
        name="photo"
        accept="image/*"
        placeholder="Foto"
        onChange={(e) =>
          setFormData({
            ...formData,
            photo: e.target.files ? e.target.files[0] : null,
          })
        }
        required
      />

      <button type="submit">Registrar</button>
    </form>
  );
};

export default MotoForm;
