import app from "./app.js";
import connection from "./config/dbConnection.js";
import dotenv from "dotenv";

dotenv.config();
connection.connect((err) => {
  if (err) {
    console.error("❌ Erro ao conectar no MySQL:", err.message);
  } else {
    app.listen(process.env.API_PORT, () => {
      console.log("Running ");
    });
  }
});
