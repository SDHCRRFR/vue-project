import connect from "../services/db.js";

const getAllRestaurant = async (sort = false) => {
    const myrequete = `
    select restaurant.* from tabledecoeur.restaurant;`;
    if(sort) {
        myrequete += 'order by created_at desc';
    }
    try {
        const [result] = await connect.query(myrequete);
        return result;
    } catch (error) {
        return error;
    }
};



const createOneRestaurant = async (data) => {
    const myrequete = `
    INSERT INTO tabledecoeur.restaurant VALUES
     ( 
        NULL, 
        :nom, 
        :adresse,
        :telephone,
        :img, 
        :code_postale,
        :menu,
        :type_restaurant_id
         );`;
    try {
        const [result] = await connect.query(myrequete, data);
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

export { getAllRestaurant, getOneRestaurantById, createOneRestaurant };