// ---------------  *✩‧₊˚  FUNCS  ˚₊‧✩*  ------------------------------------------------
export function fetchData(json: JsonData[]) {
  return json.reduce((acc, cur) => {
    return { ...acc, [cur.id]: { ...cur, cart: 0 } };
  }, {});
}

export function cartFilter(data: DataObject) {
  return Object.values(data).filter((x) => x.cart !== 0);
}

export function cartAmount(cart: Data[]) {
  return cart.reduce((acc, cur) => {
    return acc + cur.cart;
  }, 0);
}

export function roundPrice(price: number) {
  return price.toFixed(2);
}

export function totalPrice(cart: Data[]) {
  const total = cart.reduce((acc, cur) => {
    return acc + cur.cart * cur.price;
  }, 0);
  return roundPrice(total);
}

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
  changeAmount: (id: number, amount: number) => void;
};
