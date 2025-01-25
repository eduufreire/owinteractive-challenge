import { prismaClient } from "../../../repositories/prisma/prisma-provider";
import { PrismaUser } from "../../../repositories/prisma/prisma-user";
import { DeleteUserController } from "./delete-user-controller";
import { DeleteUserUseCase } from "./delete-user-use-case";

const repository = new PrismaUser(prismaClient)
const service = new DeleteUserUseCase(repository)
export const deleteController = new DeleteUserController(service)