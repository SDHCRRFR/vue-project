import connect from "../services/db.js";

const getAllType = async() => {
    const myrequete = ` 
    select type.* from tabledecoeur.type_restaurant;`
    try {
        const [result] = await connect.execute(myrequete);
        return result;
    } catch (error) {
        return error;
    }
}

export {getAllType};