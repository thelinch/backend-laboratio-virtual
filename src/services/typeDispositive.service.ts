import { typeDispositiveEnum } from "../enum/typeDispositive.enum";
import { getRepository } from "typeorm";
import { TypeDispositive } from "../entity/TypeDispositive";

class TypeDispositiveService {
  async typeName(typeEnum: typeDispositiveEnum) {
    let type = await getRepository(TypeDispositive).findOne({
      where: { name: typeEnum }
    });
    return type;
  }
}
const typeDispositiveService = new TypeDispositiveService();
export default typeDispositiveService;
