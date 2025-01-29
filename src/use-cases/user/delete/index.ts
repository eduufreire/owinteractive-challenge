import { prismaClient } from "../../../repositories/prisma/prisma-provider";
import { PrismaTransaction } from "../../../repositories/prisma/prisma-transaction";
import { PrismaUser } from "../../../repositories/prisma/prisma-user";
import { DeleteUserController } from "./delete-user-controller";
import { DeleteUserUseCase } from "./delete-user-use-case";

const repository = new PrismaUser(prismaClient);
const repositoryTransaction = new PrismaTransaction(prismaClient);
const service = new DeleteUserUseCase(repository, repositoryTransaction);
export const deleteController = new DeleteUserController(service);
