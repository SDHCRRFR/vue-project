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

const getOneRestaurantById = async (id) => {
    const myrequete = `
    select restaurant.* from tabledecoeur.restaurant WHERE restaurant.id = :id;`;
    try {
        const [result] = await connect.query(myrequete, { id: id});
        return result;
    } catch (error) {
        return error;
    }
};



export { getAllRestaurant, getOneRestaurantById };