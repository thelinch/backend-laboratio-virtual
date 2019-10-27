import { Dispositive } from "../entity/Dispositive";
import { getRepository } from "typeorm";
import typeDispositiveService from "./typeDispositive.service";
class DispositiveService {
  constructor() {}
  public async create(dispositive: any) {
    dispositive.typeDispositive = await typeDispositiveService.typeName(
      dispositive.type
    );
    let dispositiveCreate = await getRepository(Dispositive).save(dispositive);
    return dispositiveCreate;
  }
  public async all() {
    try {
      let dispositives = await getRepository(Dispositive).find({
        relations: [
          "typeDispositive",
          "maestroDispositive",
          "maestroDispositive.maestro"
        ]
      });
      return dispositives;
    } catch (error) {
      console.log("error", error);
    }
  }
}
const dispositiveService = new DispositiveService();
export default dispositiveService;
