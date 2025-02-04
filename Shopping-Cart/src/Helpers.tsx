export type InitialData = {
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

// export type CartType = { [key: string]: number } | null;

export type DataObject = { [key: number]: Data };

// const initialState = {
//   0: {
//     category: "",
//     description: "",
//     id: 0,
//     image: "",
//     price: 0,
//     rating: { rate: 0, count: 0 },
//     title: "",
//     cart: 0,
//   },
// };
