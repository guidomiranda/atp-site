export interface SuccessInterface {
  _id?: string;
  title: string;
  description: Description[];
  status: boolean;
  order: number;
  createdAt: Date;
}

type Description = {
  id: string;
  text: string;
};
