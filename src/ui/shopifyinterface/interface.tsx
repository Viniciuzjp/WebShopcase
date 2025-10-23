interface ImageType {
  src: string;
  altText: string;
  width: number;
  height: number;
}

interface Variant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
}
type Products = {
  id: string;
  handle: string;
  title: string;
  description: string;
  images: ImageType[];
  variants: Variant[];
};

export type { ImageType, Variant, Products };