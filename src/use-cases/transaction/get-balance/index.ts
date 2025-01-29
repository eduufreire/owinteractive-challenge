import { prismaClient } from "../../../repositories/prisma/prisma-provider";
import { PrismaTransaction } from "../../../repositories/prisma/prisma-transaction";
import { GetBalanceController } from "./get-balance-controller";
import { GetBalanceUseCase } from "./get-balance-use-case";

const repository = new PrismaTransaction(prismaClient);
const service = new GetBalanceUseCase(repository);
export const getBalanceController = new GetBalanceController(service);
