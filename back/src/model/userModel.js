import connection from "../../config/dbConnection.js";
import { v4 as uuidv4 } from "uuid";

class UserModel {
  async createUser(req, res) {
    const { id, email, role, username, password } = req.body;

    const query =
      "INSERT INTO users (id, email, role,username) VALUES (?, ?, ?,?)";
    const values = [id, email, role, username, password];

    await connection.query(query, values, async (error, results) => {
      const result = await results[0];
      if (error)
        return res.status(500).json({ error: "Erro ao criar usuário" });
      res.status(201).json({ message: "Usuário criado com sucesso", result: result });
    });
  }
}

export default new UserModel();
