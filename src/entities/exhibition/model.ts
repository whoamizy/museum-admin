export interface Exhibition {
  _id: string;
  name: string;
  images: string[];
  description: string;
  address: string;
  price: number;
}

export interface ExhibitionPayload {
  name: string;
  images: string[];
  description: string;
  address: string;
  price: number;
}
