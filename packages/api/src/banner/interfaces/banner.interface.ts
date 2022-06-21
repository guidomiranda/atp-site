export interface BannerInterface {
  _id?: string;
  title?: string;
  description?: string;
  image: string;
  bg: string;
  createdAt: string;
  order: number;
  status: boolean;
}

export interface BannerResponse {
  message: string;
  success: boolean;
  banner: BannerInterface;
}
