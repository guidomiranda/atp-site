export interface BannerInterface {
  _id?: string;
  title?: string;
  description?: string;
  image: string;
  bg: string;
  order: number;
  status: boolean;
  createdAt: Date;
}

export interface BannerResponse {
  message: string;
  success: boolean;
  banner: BannerInterface;
}
