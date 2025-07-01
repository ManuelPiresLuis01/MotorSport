import Style from "../dashboard/dashboard.module.css";
import style from "./index.module.css"
import Menu from "../../components/Asside/menu";
import { FaEdit } from "react-icons/fa";
import { users } from "../../components/mock/mock.mock";


const Settings = () => {
  return (
    <div className={Style.dashboardContainer}>
      <Menu name="Configurações" />
      <div className={Style.content}>
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
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.cargo}</td>
                  <td>
                    <FaEdit style={{ cursor: "pointer", color: "#4a90e2" }} title="Editar usuário" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Settings;
