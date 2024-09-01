import connect from "../services/db.js";

const getAllTypeRestaurant = async () => {
    const myrequete = `
    select type_restaurant.* from products.type_restaurant;`;
    try {
        const [result] = await connect.query(myrequete);
        return result;
    } catch (error) {
        return error;
    }
};

export {getAllTypeRestaurant};