export interface Room {
  createdAt: Date;
  name: string;
  rating: number;
  photos: string[];
  price: string;
  reviewCount: number;
  beds: number;
  bathrooms: number;
  description: string;
  thingsToKnow: any[];
  id: string;
}
