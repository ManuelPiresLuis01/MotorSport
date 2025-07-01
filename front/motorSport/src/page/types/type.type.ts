export type MotoFormData = {
  model: string;
  brand: string;
  price: string;
  status: string;
  photo: File | null;
};

export type MotoCard = {
  id?: number; 
  model: string;
  brand: string;
  price: string;
  photo: string | null; 
  status: string;
};
