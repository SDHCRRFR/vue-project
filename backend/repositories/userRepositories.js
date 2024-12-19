import connect from "../services/db.js";

const createRegister = async (data) => {
  const myrequete = `
        INSERT INTO
            products.user
        VALUE(
            NULL,
            :nom,
            :email,
            :password,
            NOW(),
            1
        );
    `;
  try {
    const [result] = await connect.query(myrequete, data);
    console.log("inscription réussi");
    return { result, succes: true };
  } catch (error) {
    console.log("Erreur lors de l'insertion" + error);
    return { error, succes: false };
  }
};


const deleteUser = async (userId) => {
  const query = "DELETE FROM products.user WHERE id = ?";
  try {
    const [result] = await connect.query(query, [userId]);
    console.log("Utilisateur supprimé avec succès");
    return { result, success: true };
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur:", error);
    return { error, success: false };
  }
};

const checkLoginCredentials = async (email) => {
  const query = "SELECT * FROM products.user WHERE email = ?";
  const [rows] = await connect.query(query, [email]);
  if (rows.length > 0) {
    return rows[0];
  }
};

const getUsers = async () => {
  const query =
    "SELECT id, nom, email, password, date_creation, role_id FROM products.user";
  try {
    const [rows] = await connect.query(query);
    return rows;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    throw error;
  }
};

const updateUserEmail = async (userId, email) => {
  const query = "UPDATE products.user SET email = ? WHERE id = ?";
  try {
    const [result] = await connect.query(query, [email, userId]);
    console.log("Email mis à jour avec succès");
    return { result, success: true };
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'email:", error);
    return { error, success: false };
  }
};

export {
  createRegister,
  deleteUser,
  checkLoginCredentials,
  getUsers,
  updateUserEmail
};
