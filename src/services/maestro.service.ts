import { getRepository } from "typeorm";
import { Maestro } from "../entity/Maestro";

class MaestroService {
  constructor() {}
  public async all() {
    let all = await getRepository(Maestro).find({ status: true });
    return all;
  }
  public async save(d: Maestro) {
    let sab = await getRepository(Maestro).save(d);
  }
}
const maestroService = new MaestroService();
export default maestroService;
