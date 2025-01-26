import { prismaClient } from "../../../repositories/prisma/prisma-provider";
import { PrismaTransaction } from "../../../repositories/prisma/prisma-transaction";
import { PrismaUser } from "../../../repositories/prisma/prisma-user";
import { GetUserUseCase } from "../../user/get-user/get-use-case";
import CreateTransactionController from "./create-controller";
import CreateTransactionuseCase from "./create-use-case";

const repository = new PrismaTransaction(prismaClient);
const user = new PrismaUser(prismaClient);
const userService = new GetUserUseCase(user);
const service = new CreateTransactionuseCase(repository, userService);
export const createTransactionController = new CreateTransactionController(service);
