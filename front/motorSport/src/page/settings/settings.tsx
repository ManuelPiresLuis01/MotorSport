import Style from "../dashboard/dashboard.module.css";
import style from "./index.module.css";
import Menu from "../../components/Asside/menu";
import ModalAdd from "./modalAddUser";
import { useState } from "react";
import { FaEdit, FaUser } from "react-icons/fa";
import { users } from "../../components/mock/mock.mock";
import { BiTrash } from "react-icons/bi";

interface User {
  username: string;
  email: string;
  cargo: string;
}
const Settings = () => {
  const [status, setStatus] = useState<boolean>(true);
  return (
    <div className={Style.dashboardContainer}>
      <Menu name="Configurações" />
      <ModalAdd status={status} setStatus={setStatus} />
      <div className={`${Style.content} ${style.content}`}>
        <div className={style.userList}>
          <table className={style.userTable}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Cargo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User, index: number) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.cargo}</td>
                  <td>
                    <FaEdit
                      style={{ cursor: "pointer", color: "#4a90e2" }}
                      title="Editar usuário"
                    />
                    <BiTrash
                      style={{
                        cursor: "pointer",
                        color: "red",
                        marginLeft: "10px",
                      }}
                      title="Deletar usuário"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={() => setStatus(true)}>
          Novo usuário <FaUser />
        </button>
      </div>
    </div>
  );
};

export default Settings;
