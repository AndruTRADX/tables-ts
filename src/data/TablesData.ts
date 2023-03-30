export type TableDataType = {
  author: string;
  tabInfo: TabInfo[];
};

export type TabInfo = {
  productName: string;
  productColor: string;
  category: string;
  price: number;
};

export const TablesData: TableDataType[] = [
  {
    author: "Juan",
    tabInfo: [
      {
        productName: "Sony PlayStation 5",
        productColor: "Black",
        category: "Gaming Console",
        price: 499
      },
      {
        productName: "Nintendo Switch",
        productColor: "Neon Red/Neon Blue",
        category: "Gaming Console",
        price: 299
      },
      {
        productName: "Xbox Series X",
        productColor: "Black",
        category: "Gaming Console",
        price: 499
      },
    ]
  },

  {
    author: "Maria",
    tabInfo: [
      {
        productName: "Samsung Galaxy S21 Ultra",
        productColor: "Phantom Silver",
        category: "Smartphone",
        price: 1199
      },
      {
        productName: "iPhone 13 Pro Max",
        productColor: "Graphite",
        category: "Smartphone",
        price: 1099
      },
      {
        productName: "Google Pixel 6 Pro",
        productColor: "Stormy Black",
        category: "Smartphone",
        price: 899
      },
    ]
  },
  
  {
    author: "Pedro",
    tabInfo: [
      {
        productName: "Dell XPS 13",
        productColor: "Platinum Silver",
        category: "Laptop",
        price: 999
      },
      {
        productName: "Lenovo ThinkPad X1 Carbon",
        productColor: "Black",
        category: "Laptop",
        price: 1499
      },
      {
        productName: "HP Spectre x360",
        productColor: "Poseidon Blue",
        category: "Laptop",
        price: 1299
      },
    ]
  },
  
  {
    author: "Luisa",
    tabInfo: [
      {
        productName: "Bose QuietComfort 35 II",
        productColor: "Black",
        category: "Noise-Canceling Headphones",
        price: 299
      },
      {
        productName: "Sony WH-1000XM4",
        productColor: "Silver",
        category: "Noise-Canceling Headphones",
        price: 349
      },
      {
        productName: "Apple AirPods Pro",
        productColor: "White",
        category: "Wireless Earbuds",
        price: 249
      },
    ]
  },
  
  {
    author: "Jorge",
    tabInfo: [
      {
        productName: "Samsung 65-Inch Class QN90A",
        productColor: "Black",
        category: "Smart TV",
        price: 1999
      },
      {
        productName: "LG CX Series 55-Inch",
        productColor: "Black",
        category: "Smart TV",
        price: 1499
      },
      {
        productName: "Sony X90J 75-Inch",
        productColor: "Black",
        category: "Smart TV",
        price: 2999
      },
    ]
  },
]