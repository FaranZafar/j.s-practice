
// const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "https://68bfb9d19c70953d96f04da5.mockapi.io/web/house/Fzwebhouse";

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("Fetched data:", data); 
    displayCards(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayCards(items) {
  const container = document.getElementById("card-container");
  if (!container) {
    console.error("No element with id 'card-container' found in the HTML.");
    return;
  }

  container.innerHTML = ""; 

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h2>${item.title || item.name || "No Title"}</h2>
      <p>${item.description || item.city || "No Description"}</p>
      <img src="${item.image || item.avatar || "https://via.placeholder.com/200"}" 
           alt="${item.title || "No Title"}">
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", fetchData);
  