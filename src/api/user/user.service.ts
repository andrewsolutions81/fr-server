// user.service.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const extractUserInputData = (input: userInterface) => {
  const { username, email, password, phone_number, is_admin, favorite_homes } =
    input;

  return {
    username,
    email,
    password,
    phone_number: parseInt(phone_number.toString()),
    is_admin,
  };
};

export const createUserService = (input: userInterface) => {
  const data = extractUserInputData(input);

  return prisma.user.create({
    data,
  });
};

export const getAllUsersService = () => {
  return prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      phone_number: true,
      is_admin: true,
      favorite_homes: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const getUserByIdService = (id: string) => {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      username: true,
      email: true,
      password: true,
      phone_number: true,
      is_admin: true,
      favorite_homes: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const updateUserService = (id: string, input: userInterface) => {
  const data = extractUserInputData(input);

  return prisma.user.update({
    where: {
      id: id,
    },
    data,
  });
};

export const deleteUserService = (id: string) => {
  return prisma.user.delete({
    where: {
      id: id,
    },
  });
};
