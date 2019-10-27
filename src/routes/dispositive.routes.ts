import { Request, Response, Router } from "express";
import dispositiveController from "../controllers/dispositive.controller";
class DispositiveRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  routes() {
    this.router.post("/create", dispositiveController.create);
    this.router.get("/all", dispositiveController.all);
  }
}
const dispositiveRoutes = new DispositiveRoutes();
export default dispositiveRoutes.router;
