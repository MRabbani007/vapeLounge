type Product = {
  id: string;
  name: string;
  title: string;
  brand: string;
  model: string;
  flavor: string;
  image: string;
  price: number;
  salePrice: number;
  qtyAvailable: number;
  createDate: Date;
  onSale: boolean;
  visible: boolean;
};

type CartItem = {
  id: string;
  productId: string;
  productName: string;
  productImage: string;
  productPrice: number;
  productCurrency: string;
  quantity: number;
};

type User = {
  id: string;
  username: string;
  password: string;
  confirm?: string;
  email?: string;
  roles: number[];
  accessToken?: string;
  refreshToken?: string;
};
