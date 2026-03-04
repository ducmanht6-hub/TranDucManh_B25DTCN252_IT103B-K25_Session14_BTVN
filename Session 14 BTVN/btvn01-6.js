let products = [
  { id: 1, name: "Bánh Chưng", price: 150000 },
  { id: 2, name: "Giò Lụa", price: 180000 },
  { id: 3, name: "Cành Đào", price: 500000 },
  { id: 4, name: "Mứt Tết", price: 120000 },
  { id: 5, name: "Bao Lì Xì", price: 25000 },
  { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");
let form = document.getElementById("product-form");
let nameInput = document.getElementById("product-name");
let priceInput = document.getElementById("product-price");
let searchInput = document.getElementById("search-input");
let sortAscBtn = document.getElementById("sort-asc");
let sortDescBtn = document.getElementById("sort-desc");

renderProducts(products);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = nameInput.value.trim();
  let price = +priceInput.value;

  if (name === "" || price <= 0) return;

  let newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(newProduct);
  renderProducts(products);

  nameInput.value = "";
  priceInput.value = "";
});

productList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    let confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (confirmDelete) {
      let id = +e.target.parentElement.dataset.id;
      products = products.filter((p) => p.id !== id);
      renderProducts(products);
    }
  }

  if (e.target.classList.contains("edit-price-btn")) {
    let id = +e.target.parentElement.dataset.id;
    let product = products.find((p) => p.id === id);

    let newPrice = prompt("Nhập giá mới (VND):");

    if (newPrice !== null) {
      newPrice = +newPrice;
      if (newPrice > 0) {
        product.price = newPrice;
        renderProducts(products);
      }
    }
  }
});

searchInput.addEventListener("input", function () {
  let keyword = searchInput.value.toLowerCase();

  let filtered = products.filter((p) => p.name.toLowerCase().includes(keyword));

  renderProducts(filtered);
});

sortAsc.addEventListener("click", function () {
  let sorted = [...products].sort((a, b) => a.price - b.price);
  renderProducts(sorted);
});

sortDesc.addEventListener("click", function () {
  let sorted = [...products].sort((a, b) => b.price - a.price);
  renderProducts(sorted);
});

function renderProducts(list) {
  productList.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");
    li.className = "product-item";
    li.dataset.id = list[i].id;

    li.innerHTML = `
            <strong>${list[i].name}</strong> - 
            <span class="price">${list[i].price.toLocaleString()} VNĐ</span>
            <button class="edit-price-btn">Sửa giá</button>
            <button class="delete-btn">Xóa</button>
        `;

    productList.appendChild(li);
  }
}
