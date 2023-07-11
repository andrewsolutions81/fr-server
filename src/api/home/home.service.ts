//home.service.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const extractHomeInputData = (input: homeInterface) => {
  const {
    title,
    description,
    neighborhood,
    address,
    notes,
    available,
    price,
    area,
    floor,
    rooms,
    bathrooms,
    storage,
    antiquity,
    parking_spots,
    images_url,
  } = input;

  return {
    title,
    description,
    neighborhood,
    address,
    notes,
    available,
    price: parseInt(price.toString()),
    area: parseInt(area.toString()),
    floor: parseInt(floor.toString()),
    rooms: parseInt(rooms.toString()),
    bathrooms: parseInt(bathrooms.toString()),
    storage: parseInt(storage.toString()),
    antiquity: parseInt(antiquity.toString()),
    parking_spots: parseInt(parking_spots.toString()),
    images_url,
  };
};

export const createHomeService = (input: homeInterface) => {
  const data = extractHomeInputData(input);

  return prisma.home.create({
    data,
  });
};

export const getAllHomesService = () => {
  return prisma.home.findMany({
    select: {
      id: true,
      title: true,
      available: true,
      description: true,
      neighborhood: true,
      address: true,
      notes: true,
      images_url: true,
      price: true,
      area: true,
      floor: true,
      rooms: true,
      bathrooms: true,
      storage: true,
      antiquity: true,
      parking_spots: true,
      favorite_users: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const getHomeByIdService = (id: string) => {
  return prisma.home.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      available: true,
      description: true,
      neighborhood: true,
      address: true,
      notes: true,
      price: true,
      area: true,
      floor: true,
      rooms: true,
      bathrooms: true,
      storage: true,
      antiquity: true,
      parking_spots: true,
      images_url: true,
      favorite_users: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const updateHomeService = (id: string, input: homeInterface) => {
  const data = extractHomeInputData(input);

  return prisma.home.update({
    where: {
      id: id,
    },
    data,
  });
};

export const deleteHomeService = (id: string) => {
  return prisma.home.delete({
    where: {
      id: id,
    },
  });
};
