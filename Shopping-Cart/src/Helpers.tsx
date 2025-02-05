// ---------------  *✩‧₊˚  FUNCS  ˚₊‧✩*  ------------------------------------------------
export function fetchData(json: JsonData[]) {
  return json.reduce((acc, cur) => {
    return { ...acc, [cur.id]: { ...cur, cart: 0 } };
  }, {});
}

export function cartFilter(data: DataObject) {
  return Object.values(data).filter((x) => x.cart !== 0);
}

export const cartAmount = (cart: Data[]) => {
  return cart.reduce((acc, cur) => {
    return acc + cur.cart;
  }, 0);
};

export const totalPrice = (cart: Data[]) => {
  return cart.reduce((acc, cur) => {
    return acc + cur.cart * cur.price;
  }, 0);
};

// ---------------  *✩‧₊˚  TYPES  ˚₊‧✩*  ------------------------------------------------

export type JsonData = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

export type Data = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  cart: number;
};

export type DataObject = { [key: number]: Data };

export type CartFuncs = {
  addToCart: (id: number) => void;
  subtractFromCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  emptyCart: () => void;
};
