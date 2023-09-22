import { getAllType } from "../repositories/typeRepositories.js";

const index = async(req, res) => {
   const donnee = await getAllType();
   res.status(200).json({
    data: donnee
   })
}

export { index };