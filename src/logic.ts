// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
    name: string;
    price: number;
};
 
function filterAndSortProducts(products: Product[]): Product[] {
    // Your code goes here
// Используем Map для фильтрации уникальных товаров по названию
    const uniqueProducts = new Map<string, Product>();
// Добавляем товары в Map, где ключом является имя товара
    products.forEach(product => {
        uniqueProducts.set(product.name, product);
    });

    // Преобразуем Map обратно в массив и сортируем по цене
    const sortedProducts = Array.from(uniqueProducts.values()).sort((a, b) => a.price - b.price);
   return sortedProducts;
}
// Пример использования функции
const products: Product[] = [
    { name: 'Apple', price: 1.2 },
    { name: 'Banana', price: 0.8 },
    { name: 'Apple', price: 1.0 },
    { name: 'Orange', price: 1.5 }
];

// Вызываем функцию и выводим результат
const uniqueSortedProducts = filterAndSortProducts(products);
console.log(uniqueSortedProducts);

module.exports = { filterAndSortProducts };
