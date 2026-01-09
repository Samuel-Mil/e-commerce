import { Router } from "express";
import userRoutes from "./modules/users/user.router";

const routes = Router();

routes.use("/users", userRoutes);

export default routes;
