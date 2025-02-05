// ---------------  *✩‧₊˚  FUNCS  ˚₊‧✩*  ------------------------------------------------
export function fetchData(json: JsonData[]) {
  return json.reduce((acc, cur) => {
    return { ...acc, [cur.id]: { ...cur, cart: 0 } };
  }, {});
}

export function cartFilter(data: DataObject) {
  return Object.values(data).filter((x) => x.cart !== 0);
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

// ---------------  *✩‧₊˚  CONST  ˚₊‧✩*  ------------------------------------------------

export const initialData = {
  0: {
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: { rate: 0, count: 0 },
    title: "",
    cart: 0,
  },
};
