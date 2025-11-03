export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Headphones', price: 150, category: 'Electronics', stock: 8 },
    { id: 'p5', name: 'Jersey', price: 120, category: 'Clothing', stock: 10 },
    { id: 'p6', name: 'Table', price: 200, category: 'Furniture', stock: 3 },
    { id: 'p7', name: 'Pants', price: 90, category: 'Clothing', stock: 7 },
    { id: 'p8', name: 'PC', price: 950, category: 'Electronics', stock: 3 },
    { id: 'p9', name: 'Socks', price: 10, category: 'Clothing', stock: 9 }
  ];
  return Response.json(products);
}