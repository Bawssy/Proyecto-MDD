"use strict";
// Importa el modulo 'express' para crear las rutas
import { Router } from "express";

/** Controlador de usuarios */
import {getUser, getUsers, updateUser, deleteUser} from "../controllers/user.controller.js";

/** Middlewares de autorización */
import { isAdmin } from "../middlewares/auth.middleware.js";

/** Instancia del enrutador */
const router = Router();

// Define las rutas para los usuarios
router.get("/", isAdmin, getUsers);
router.get("/:id", isAdmin, getUser);
router.put("/:id", isAdmin, updateUser);
router.delete("/:id", isAdmin, deleteUser);

// Exporta el enrutador
export default router;