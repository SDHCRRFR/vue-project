import connect from "../services/db.js";

const getAllRestaurant = async () => {
    const myrequete = `
    select restaurant.* from tabledecoeur.restaurant;`;
    try {
        const [result] = await connect.query(myrequete);
        return result;
    } catch (error) {
        return error;
    }
};

export {getAllRestaurant};