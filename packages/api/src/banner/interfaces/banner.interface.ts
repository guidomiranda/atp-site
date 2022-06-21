export interface BannerInterface {
  _id?: string;
  title?: string;
  description?: Description[];
  image: string;
  bg: string;
  order: number;
  status: boolean;
  createdAt: Date;
}

type Description = {
  id: string;
  text: string;
};

export interface BannerResponse {
  message: string;
  success: boolean;
  banner: BannerInterface;
}
