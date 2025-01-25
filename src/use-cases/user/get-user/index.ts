import { prismaClient } from "../../../repositories/prisma/prisma-provider";
import { PrismaUser } from "../../../repositories/prisma/prisma-user";
import { GetUserUseCase } from "./get-use-case";
import { GetUserController } from "./get-user-controller";

const repository = new PrismaUser(prismaClient);
const service = new GetUserUseCase(repository);
export const getUserController = new GetUserController(service);