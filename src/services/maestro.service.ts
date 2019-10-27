import { getRepository } from "typeorm";
import { Maestro } from "../entity/maestro";

class MaestroService {
  constructor() {}
  public async all() {
    let all = await getRepository(Maestro).find({ status: true });
    return all;
  }
}
const maestroService = new MaestroService();
export default maestroService;
