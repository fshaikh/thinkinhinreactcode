export async function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = [
                {
                    name:'Football', price: '$19.99', stocked: true, category:'Sports'
                },
                {
                    name:'Raquet', price: '$49.99', stocked: true, category:'Sports'
                },
                {
                    name:'Basketball', price: '$9.99', stocked: false, category:'Sports'
                },
                {
                    name:'iPhone', price: '$100.99', stocked: true, category:'Electronics'
                },
                {
                    name:'Oculus', price: '$39.99', stocked: false, category:'Electronics'
                },
                {
                    name:'LMotion', price: '$39.99', stocked: true, category:'Electronics'
                }
            ];
            resolve(products);
        }, 2000);
    });
}