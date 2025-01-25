import { prismaClient } from "../../../repositories/prisma/prisma-provider";
import { PrismaUser } from "../../../repositories/prisma/prisma-user";
import { GetAllUserController } from "./get-all-controller";
import { GetAllUserUseCase } from "./get-all-use-case";

const repository = new PrismaUser(prismaClient);
const service = new GetAllUserUseCase(repository);
export const getAllUserController = new GetAllUserController(service);