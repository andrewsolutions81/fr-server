//types&interfaces.ts
import { Request } from "express";

export interface homeInterface {
  id: string;
  title: string;
  description: string;
  neighborhood: string;
  address: string;
  notes: string;
  available: boolean;
  price: number;
  area: number;
  floor: number;
  rooms: number;
  bathrooms: number;
  storage: number;
  antiquity: number;
  parking_spots: number;
  images_url: string[];
  favorite_users: userInterface[];
}

export interface userInterface {
  id: string;
  username: string;
  email: string;
  password: string;
  phone_number: string;
  is_admin: boolean;
  favorite_homes: homeInterface[];
}

export type signupInput = {
  username: string;
  email: string;
  password: string;
  phone_number: string;
};

export interface AuthUserInterface extends Request {
  user?: string;
}

