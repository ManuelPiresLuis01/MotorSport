export type MotoFormData = {
  model: string;
  brand: string;
  price: string;
  status: string;
  photo: File | null;
};

export type User = {
  username: string;
  email: string;
  role: string;
  password: string;
  photo: File | null;
};


export type MotoCard = {
  id: string; 
  model: string;
  brand: string;
  price: string;
  photo: string | null; 
  status: string;
};


export type modalProps = {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export type Sale = {
  motoId: string;
  buyerName: string;
  buyerEmail: string;
}

export type SaleProps = {
  motoId: string;
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}