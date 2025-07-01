import { useState } from "react";
import Style from "./modal.module.css";
import style from "../register/style.module.css";
import type { User, modalProps } from "../types/type.type";

const ModalAdd = (p: modalProps) => {
  const [formData, setFormData] = useState<User>({
    username: "",
    email: "",
    role: "",
    password: "",
    photo: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("user registrado:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        p.status
          ? `${style.formContainer} ${Style.formCenter}`
          : Style.formInative
      }
    >
      <h2>Registrar Usuário</h2>

      <input
        type="text"
        name="username"
        value={formData.username}
        placeholder="Username"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="email"
        onChange={handleChange}
        required
      />

      <input
        type="string"
        name="password"
        value={formData.password}
        placeholder="password"
        onChange={handleChange}
        required
      />

      <select value={formData.role} name="role" onChange={handleChange}>
        <option value="admin">Admin</option>
        <option value="manager">Gestor</option>
        <option value="saler">Atendente</option>
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
      <button type="button" style={{backgroundColor:"red"}} onClick={() => p.setStatus(false)}>
        Fechar
      </button>
    </form>
  );
};

export default ModalAdd;
