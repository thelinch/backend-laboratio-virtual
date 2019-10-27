import { getRepository } from "typeorm";
import { Dispositive } from "../entity/Dispositive";
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
}
const dispositiveService = new DispositiveService();
export default dispositiveService;
