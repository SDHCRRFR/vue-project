import connect from "../services/db.js";

const createRegister = async (data) => {
  const myrequete = `
        INSERT INTO
            tabledecoeur.user
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

const updateUserInDatabase = async (userId, updatedUserData) => {
  const { nom, email, password, role_id } = updatedUserData;

  const updateQuery = `
    UPDATE tabledecoeur.user
    SET nom = ?, email = ?, password = ?, role_id = ?
    WHERE id = ?;
  `;
  try {
    const [result] = await connect.query(updateQuery, [
      nom,
      email,
      password,
      role_id,
      userId,
    ]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour des détails de l'utilisateur dans la base de données:",
      error
    );
    throw error;
  }
};

// const getUserById = async (userId) => {
//   // Convertir l'ID en nombre si c'est une chaîne de caractères
//   userId = parseInt(userId);
//   console.log("Fetching user details for ID:", userId);
//   const query = `SELECT user.* FROM tabledecoeur.user WHERE user.id = :id;`;
//   const [rows] = await connect.query(query, [userId]);
//   console.log("User details:", rows);
//   return rows.length > 0 ? rows[0] : null;
// };

const getUserById = async (id) => {
  const myrequete = `select restaurant.* from tabledecoeur.user WHERE user.id = :id;`;
  try {
      const [result] = await connect.query(myrequete, { id: id});
      return result;
  } catch (error) {
      return error;
  }
};

const deleteUser = async (userId) => {
  const query = "DELETE FROM tabledecoeur.user WHERE id = ?";
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
  const query = "SELECT * FROM tabledecoeur.user WHERE email = ?";
  const [rows] = await connect.query(query, [email]);
  if (rows.length > 0) {
    return rows[0];
  }
};

const getUsers = async () => {
  const query =
    "SELECT id, nom, email, date_creation, role_id FROM tabledecoeur.user";
  try {
    const [rows] = await connect.query(query);
    return rows;
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    throw error;
  }
};

export {
  createRegister,
  deleteUser,
  updateUserInDatabase,
  getUserById,
  checkLoginCredentials,
  getUsers,
};
