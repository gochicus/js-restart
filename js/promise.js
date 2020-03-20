const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ
let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = new Promise((res, rej) => {
        if (xhr.readyState === 4) {
            if (xhr.status !== 200) {
                reject('Error');
            } else {
                resolve(xhr.responseText);
            }
        }
    });
    xhr.send();
};

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        // this._fetchProducts();
        this._getProducts()
            .then((data) => {
                this.goods = [...data];
                this.render();
            });
    }

    // _fetchProducts() {
    //   getRequest(`${API}/catalogData.json`, (data) => {
    //     this.goods = JSON.parse(data);
    //     this.render();
    //     console.log(this.goods);
    //   });
    // }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log('Error!', error);
            });
    }

    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
    }
}
// Структура корзины с предыдущего курса. 
class Cart {

    constructor(items) {
        this.items = this._cartAdd(buy);
    }
    _cartAdd() {
        let item = buy.currentTarget;
        return this.items.push(item);

    }
    _cartRender() {
        this.items.forEach(el => { return `<div class="new-product">${el}</div>` });
    }

}
new ProductList();