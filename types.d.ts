type Product = {
  _id?: string;
  id: string;
  name: string;
  title: string;
  brand: string;
  model: string;
  flavor: string;
  imageURL: string;
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
  prodID: string;
  name: string;
  image: string;
  price: number;
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

type ProductModel = {
  brand: string;
  model: string;
};
