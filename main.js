import "./src/assets/tailwind.css";
import { fetchProducts } from "./src/js/fetch-products";

const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/Saidumarxon";

const productsWrapper = document.querySelector(".product-list");
productsWrapper.addEventListener("click", deleteTask);
window.addEventListener("load", fetchProducts);


async function deleteTask(e) {
  const target = e.target;
  const listElement = target.parentElement.parentElement.parentElement.parentElement;
  if (!target.classList.contains("delete-btn")) return;
  const res = await fetch(`${api}/${listElement.id}.json`, {
    method: "DELETE",
  });
  fetchProducts();
}