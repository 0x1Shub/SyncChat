import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddleware.js";
import {
  getContactsForDMList,
  searchContacts,
} from "../controllers/ContactController.js";

const contactsRoutes = Router();

contactsRoutes.post("/search", verifyToken, searchContacts);
contactsRoutes.get("/get-contacts-for-dm", verifyToken, getContactsForDMList);

export default contactsRoutes;
