import connect from "../services/db.js";

const createRegister = async (data) => {
  console.log(data);
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
    const [result] = await connect.execute(myrequete, data);
    return result;
  } catch (error) {
    return error;
  }
};

const checkLoginCredentials = async (email) => {
  const query = "SELECT * FROM user WHERE email = ?";
  const [rows] = await connect.execute(query, [email]);

  if (rows.length > 0) {
    return rows[0];
  } else {
    return null;
  }
};

export { createRegister };
export { checkLoginCredentials };
