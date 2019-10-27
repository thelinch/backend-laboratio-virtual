import { Request, Response } from "express";
import maestroService from "../services/maestro.service";
/**
 * Clase correspondiente al controlador principal.
 * @class IndexController
 */
class MaestroController {
  constructor() {}
  public async all(req: Request, res: Response) {
    res.send(await maestroService.all());
  }
}
const maestroController = new MaestroController();
export default maestroController;
