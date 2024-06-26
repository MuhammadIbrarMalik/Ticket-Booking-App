import { Router } from "express";
import seatController from "../../controllers/seat/index.js";
import AuthenticateMiddleware from "../../middlewares/authentication/index.js";
import adminRoleMiddleware from "../../middlewares/adminRole/index.js";
import passengerRoleMiddleware from "../../middlewares/passengerRole/index.js";
import seatValidator from "../../validators/seat/index.js";
const seatRouter = Router();
seatRouter.post(
  "/seatadd",
  AuthenticateMiddleware,
  adminRoleMiddleware,
  seatValidator.create,
  seatController.create
);
seatRouter.get("/busseats/:BusId", AuthenticateMiddleware, seatController.get);
seatRouter.post(
  "/seatnbr",
  AuthenticateMiddleware,
  passengerRoleMiddleware,
  seatController.update
);
seatRouter.put(
  "/seatstatus",
  AuthenticateMiddleware,
  passengerRoleMiddleware,
  seatController.updateSeatStatus
);
export default seatRouter;
