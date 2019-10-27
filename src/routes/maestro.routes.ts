import { Request, Response, Router } from "express";
import maestroController from "../controllers/maestro.controller";
class MaestroRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  routes() {
    this.router.get("/all", maestroController.all);
  }
}
const maestroRoutes = new MaestroRoutes();
export default maestroRoutes.router;
