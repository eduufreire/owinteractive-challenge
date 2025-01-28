import { prismaClient } from "../../../repositories/prisma/prisma-provider";
import { PrismaTransaction } from "../../../repositories/prisma/prisma-transaction";
import { GetAllTransactionController } from "./get-all-controller";
import { GetAllTransactionUseCase } from "./get-all-use-case";

const repository = new PrismaTransaction(prismaClient);
const service = new GetAllTransactionUseCase(repository);
export const getAllTransactionController = new GetAllTransactionController(service);
