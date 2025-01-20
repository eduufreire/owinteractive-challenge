import { prismaClient } from "../../../repositories/prisma/prisma-provider";
import { PrismaUser } from "../../../repositories/prisma/prisma-user";
import { CreateUserController } from "./create-controller";
import { CreateUserUseCase } from "./create-user-use-case";

const repository = new PrismaUser(prismaClient);
const service = new CreateUserUseCase(repository);
export const createController = new CreateUserController(service);
