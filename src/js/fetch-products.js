import { productCardTemplate } from "./product-card-template";
const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/Saidumarxon";

const productsWrapper = document.querySelector(".product-list");

export async function fetchProducts() {
    const res = await fetch(`${api}.json`);
    const data = await res.json();
    productsWrapper.innerHTML = ""; 
    for (let key in data) {
      productsWrapper.innerHTML += productCardTemplate(data[key], key);
    }
}
