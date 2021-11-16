const trendingData: {
  imageUrl: string;
  heading: string;
  price: number;
  id: number;
}[] = [
  {
    imageUrl: '../assets/images/product.png',
    heading: 'Chelsea F.C. 2020/21 Stadium Home',
    price: 67.86,
    id: Math.floor(Math.random() * 5),
  },
  {
    imageUrl: '../assets/images/product-1.png',
    heading: "Nike F.C. Women's Tie-Dye Football Shirt",
    price: 55.25,
    id: Math.floor(Math.random() * 5),
  },
  {
    imageUrl: '../assets/images/product-2.png',
    heading: 'Athletico Madrid 2020/21 Stadium Home',
    price: 67.86,
    id: Math.floor(Math.random() * 5),
  },
  {
    imageUrl: '../assets/images/product-3.png',
    heading: 'Portland Thorns F.C. 2020 Stadium Away',
    price: 67.86,
    id: Math.floor(Math.random() * 5),
  },
];
const cartData: {
  imageUrl: string;
  heading: string;
  price: number;
  id: number;
  size: string;
}[] = [
  {
    imageUrl: '../assets/images/product-1.png',
    heading: "Nike F.C. Women's Tie-Dye Football Shirt",
    price: 45,
    id: Math.floor(Math.random() * 5),
    size: 'x1',
  },
  {
    imageUrl: '../assets/images/product-2.png',
    heading: 'FC Barcelona 2019/20 Stadium Home',
    size: 'x2',
    price: 125,
    id: Math.floor(Math.random() * 5),
  },
  {
    imageUrl: '../assets/images/product-3.png',
    heading: 'Inter Milan 2020/21 Stadium Home',
    price: 67.86,
    id: Math.floor(Math.random() * 5),
    size: 'x1',
  },
];

export { trendingData, cartData };
