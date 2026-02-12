export interface IProductDetailPageParams {
  id: string;
}

export interface IProductDetailPageProps {
  params: Promise<IProductDetailPageParams>;
}
