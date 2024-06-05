export const ITEM_PER_PAGE = 6;

export const getProducts = async (): Promise<Product[]> => {
  try {
    const products = await fetch("/api/products", {
      method: "GET",
    });
    return Array.isArray(products) ? products : [];
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getProdBarnd = async (brand: string): Promise<Product[]> => {
  try {
    const products = await fetch(`/api/products/brand/${brand}`, {
      method: "GET",
    });
    return Array.isArray(products) ? products : [];
  } catch (e) {
    return [];
  }
};

export const getProdModel = async (
  brand: string,
  model: string
): Promise<Product[]> => {
  try {
    const products = await fetch(`/api/products/mode/${model}`, {
      method: "GET",
    });
    return Array.isArray(products) ? products : [];
  } catch (e) {
    return [];
  }
};
