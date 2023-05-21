import "../assets/tailwind.css";
import { fetchProducts } from "./fetch-products"

const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/Saidumarxon";

  const name = document.querySelector('#name');
  const price = document.querySelector('#price');
  const image = document.querySelector('#image'); 
  const createBtn = document.querySelector('#createBtn');
const description = document.querySelector('#description');   

createBtn.addEventListener("click", createToDo);

export async function createToDo(e) {
    e.preventDefault()
    const valueName = name.value.trim();
    const valuePrice = price.value.trim();
    const valueImage = image.value.trim();
    const valueDes = description.value.trim();
  
    const res = await fetch(`${api}.json`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: valueName,
        price: valuePrice,
        description: valueDes,
        image: valueImage,
      }),
    });
    const data = await res.json();
    name.value = '';
    price.value = '';
    image.value = '';
    description.value = '';
    fetchProducts();
  }

