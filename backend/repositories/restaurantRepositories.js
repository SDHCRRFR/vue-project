import connect from "../services/db.js";

const getAllRestaurant = async (sort = false) => {
  const myrequete = `
    select restaurant.* from tabledecoeur.restaurant;`;
  if (sort) {
    myrequete += "order by created_at desc";
  }
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
    const [result] = await connect.query(myrequete, { id: id });
    return result;
  } catch (error) {
    return error;
  }
};

// version 2 -request add createRestaurant ;)

const createOneRestaurant = async (data) => {
  if (!data) {
    console.log("Les données sont manquantes.");
    return { error: "Données manquantes.", success: false };
  }

  const myrequete = `
  INSERT INTO 
      tabledecoeur.restaurant 
      (nom, adresse, telephone, img, code_postale, menu, type_restaurant_id)
  VALUES (
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
    console.log("Oh yeah baby hahaaaa");
    return { result, succes: true };
  } catch (error) {
    console.log("Erreur lors de l'insertion" + error);
    return { error, succes: false };
  }
};

const deleteOneRestaurant = async (restaurantId) => {
    const myrequete = "DELETE FROM tabledecoeur.restaurant WHERE id = ?";
    try {
      const [result] = await connect.query(myrequete, {restaurantId});
      console.log("Suppression réussie !");
      return { result, success: true };
    } catch (error) {
      console.error("Erreur lors de la suppression :(", error);
      return { error, success: false };
    }
  };

export { getAllRestaurant, getOneRestaurantById, deleteOneRestaurant, createOneRestaurant };
