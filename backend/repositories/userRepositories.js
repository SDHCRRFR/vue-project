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
    console.log('inscription réussi');
    return {result, succes: true};
  } catch (error) {
    console.log("Erreur lors de l'insertion" + error);
    return {error, succes: false};
  }
  
};

const checkLoginCredentials = async (email) => {
  const query = "SELECT * FROM tabledecoeur.user WHERE email = ?";
  const [rows] = await connect.query(query, [email]);
  if (rows.length > 0) {
    return rows[0];
  }
};

export { createRegister };
export { checkLoginCredentials };
