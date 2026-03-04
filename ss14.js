const products = [
  { id: 1, name: "Bánh Chưng", price: 150000, img: "./img/banhchung.webp" },
  { id: 2, name: "Giò Lụa", price: 180000, img: "./img/giolua.jpg" },
  { id: 3, name: "Cành Đào", price: 500000, img: "./img/canhdao.webp" },
  { id: 4, name: "Mứt Tết", price: 120000, img: "./img/muttet.webp" },
  { id: 5, name: "Lì Xì (Tệp)", price: 20000, img: "./img/lixi.webp" },
  { id: 6, name: "Dưa Hấu", price: 60000, img: "./img/duahau.jpg" },
];

const cart = [
  { id: 1, name: "Bánh Chưng", price: 150000, quanity: 1 },
  { id: 2, name: "Giò Lụa", price: 180000, quanity: 1 },
];

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});

function renderProducts() {
  let str = "";
  for (let i = 0; i < products.length; i++) {
    str += `<div class="product-card">
                    <img src="${products[i].img}" alt="${products[i].name}">
                    <h3>${products[i].name}</h3>
                    <p class="price">${formatter.format(products[i].price)}</p>
                    <button class="btn-add" onclick="addToCart(${i})">Thêm vào giỏ</button>
                </div>`;
  }
  document.getElementById("product-list").innerHTML = str;
}
renderProducts();

function renderCart() {
  let str = "";
  for (let i = 0; i < cart.length; i++) {
    str += `<li>
                    <span class="cart-item-name">${cart[i].name}</span>
                    <span>SL: ${cart[i].quanity}</span>
                    <div>
                        <span class="cart-item-price">${formatter.format(cart[i].price * cart[i].quanity)}</span>
                        <button class="btn-remove">X</button>
                    </div>
                </li>`;
  }
  document.getElementById("cart-list").innerHTML = str;
}
renderCart();

function addToCart(index) {
  let newProduct = { ...products[index], quanity: 1 };
  cart.push({ ...newProduct });
  renderCart();
}
