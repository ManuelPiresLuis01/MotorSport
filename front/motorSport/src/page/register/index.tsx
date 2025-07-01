import MotoForm from "./register";
import Menu from "../../components/Asside/menu";
import Style from "../dashboard/dashboard.module.css";

const Register = () => {
  return (
    <div className={Style.dashboardContainer}>
      <Menu name="Registar" />
      <div className={Style.content}>
        <MotoForm
        />
        
      </div>
    </div>
  );
};

export default Register;
