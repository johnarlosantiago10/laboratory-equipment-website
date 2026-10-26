export type ProductStatus = 'ready' | 'pending';

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** Equipment categories this brand offers. */
  categoryIds: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  brandId: string;
  model: string;
  categoryId: string;
  image: string;
  summary: string;
  description: string;
  specifications: ProductSpec[];
  featured?: boolean;
  status: ProductStatus;
}

export interface CategoryShowcase {
  id: string;
  brandId: string;
  categoryId: string;
  /** Illustrative equipment image — not a specific manufacturer product photo. */
  image: string;
  altText: string;
  description: string;
  status: ProductStatus;
}

export const PREPARING_MESSAGE =
  'Product details for this brand and category are being prepared. ' +
  'Please check back soon or contact us for information.';

export const ILLUSTRATIVE_IMAGE_NOTE =
  'Illustrative equipment image — not a specific product photo.';
