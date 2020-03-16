const products = [
    { id: 1, title: 'Notebook', price: 20000 },
    { id: 2, title: 'Mouse', price: 1500 },
    { id: 3, title: 'Keyboard', price: 5000 },
    { id: 4, title: 'Gamepad', price: 4500 },
];

const renderProduct = (title = "Product", price = 100, img = "https://via.placeholder.com/150.jpeg") => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="${img}">
                <p>${price}</p>
                <button class="buy-btn">Добавить в корзину</button>
            </div>`;
};

const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productList.join(' ');
};

renderProducts(products);