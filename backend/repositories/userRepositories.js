import connect from "../services/db.js";

const createRegister = async(data) => {
    console.log(data);
    const myrequete = `
        INSERT INTO
            tabledecoeur.user
        VALUE(
            NULL,
            :nom,
            :prenom,
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
}

export {createRegister};