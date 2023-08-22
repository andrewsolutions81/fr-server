//types&interfaces.ts

interface homeInterface {
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

interface userInterface {
  id: string;
  username: string;
  email: string;
  password: string;
  phone_number: number;
  is_admin: boolean;
  favorite_homes: homeInterface[];
}