export function TransformProductByCategory(products) {
    return products.reduce((productsByCategory , product) => {
        productsByCategory[product.category] = productsByCategory[product.category] || [];
        productsByCategory[product.category].push(product);
        return productsByCategory;
    }, {});
}