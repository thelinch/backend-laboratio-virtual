import { Dispositive } from "../entity/Dispositive";
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
  public async all(req: Request, res: Response) {
    res.send(await dispositiveService.all());
  }
}
const dispositiveController = new DispositiveController();
export default dispositiveController;
