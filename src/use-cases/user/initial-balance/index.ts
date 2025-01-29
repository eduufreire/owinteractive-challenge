import { prismaClient } from "../../../repositories/prisma/prisma-provider";
import { PrismaUser } from "../../../repositories/prisma/prisma-user";
import { InitialBalanceController } from "./initial-balance-controller";
import { InitialBalanceUseCase } from "./initial-balance-use-case";

const repository = new PrismaUser(prismaClient);
const service = new InitialBalanceUseCase(repository);
export const initialBalanceController = new InitialBalanceController(service);
