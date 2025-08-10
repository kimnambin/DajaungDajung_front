export interface Seller {
  id: number;
  seller: string;
  image: number;
}

export interface SigupProps {
  email: string;
  password: string;
}

export interface UserDataProps {
  [x: string]: any;
  contextUserData: {
    name: string;
    email: string;
    info: string;
    contact: string;
    imgId?: string;
    nickname?: string;
    created_at?: string;
  };
}
