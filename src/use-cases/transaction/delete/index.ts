import { prismaClient } from "../../../repositories/prisma/prisma-provider";
import { PrismaTransaction } from "../../../repositories/prisma/prisma-transaction";
import { DeleteTransactionController } from "./delete-controller";
import { DeleteTransactionUseCase } from "./delete-use-case";

const repository = new PrismaTransaction(prismaClient);
const service = new DeleteTransactionUseCase(repository);
export const deleteTransactionController = new DeleteTransactionController(service);
