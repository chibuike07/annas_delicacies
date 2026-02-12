import type { Metadata } from "next";
import { products } from "@/lib/utils/dummyData";
import {
  getAbsoluteImageUrl,
  getOgImageUrl,
  getProductDetailUrl,
  getPublicAssetPath,
} from "@/lib/utils/config";
import ProductDetailPage from "@/components/ProductDetailPage/ProductDetailPage";
import type { IProductDetailPageProps } from "@/components/ProductDetailPage/ProductDetailPage.interface";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: IProductDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    };
  }

  const productImageUrl = getAbsoluteImageUrl(product.image);
  const ogImageUrl = getOgImageUrl(product.image);
  const productImageSrc = getPublicAssetPath(product.image);
  const productPageUrl = getProductDetailUrl(product.id);

  return {
    title: `${product.name} | Anna's Delicacies`,
    description: product.description,
    keywords: [product.name, product.badge || "", "curated products"].filter(
      Boolean,
    ),
    openGraph: {
      type: "article",
      url: productPageUrl,
      siteName: "Anna's Delicacies",
      title: product.name,
      description: product.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: productPageUrl,
    },
  };
}

const ProductPage = ({ params }: IProductDetailPageProps) => {
  return <ProductDetailPage params={params} />;
};

export default ProductPage;
