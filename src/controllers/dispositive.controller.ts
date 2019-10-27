import { Dispositive } from "./../entity/dispositive";
import { Request, Response } from "express";
import dispositiveService from "../services/dispositive.service";
/**
 * Clase correspondiente al controlador principal.
 * @class IndexController
 */
class DispositiveController {
  constructor() {}
  public async create(req: Request, res: Response) {
    res.send(await dispositiveService.create(req.body as Dispositive));
  }
}
const dispositiveController = new DispositiveController();
export default dispositiveController;
