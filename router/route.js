import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from "../controllers/controller.js";

router
  .route("/register")
  .get(controller.getRegistrations)
  .post(controller.storeRegistrations)
  .delete(controller.deleteRegistrations);

export default router;
