import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();
const userController = new UserController();

router.post("/", (req, res) => userController.create(req, res));

router.get("/", (req, res) => userController.findAll(req, res));
router.get("/:id", (req, res) => userController.findById(req, res));

router.put("/:id", (req, res) => userController.update(req, res));

router.patch("/:id/deactivate", (req, res) =>
  userController.deactivate(req, res)
);

router.delete("/:id", (req, res) => userController.delete(req, res));

export default router;
