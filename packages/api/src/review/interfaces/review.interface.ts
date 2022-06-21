export interface ReviewInterface {
  _id?: string;
  body: string;
  author: string;
  status: boolean;
  order: number;
  createdAt: Date;
}
