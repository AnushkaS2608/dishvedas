const itemInput = document.getElementById("item");
const addBtn = document.getElementById("add-btn");
const itemsList = document.getElementById("items-list");
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const searchResults = document.getElementById("search-results");

let items = [];

function addItem() {
	if (itemInput.value) {
		items.push(itemInput.value);
		const li = document.createElement("li");
		li.textContent = itemInput.value;
		itemsList.appendChild(li);
		itemInput.value = "";
	}
}

function searchItems() {
	if (searchInput.value) {
		const searchResultsArray = items.filter((item) => item.toLowerCase().includes(searchInput.value.toLowerCase()));
		if (searchResultsArray.length > 0) {
			searchResults.textContent = `Search Results for "${searchInput.value}": ${searchResultsArray.join(", ")}`;
		} else {
			searchResults.textContent = `No Results Found for "${searchInput.value}"`;
		}
		searchInput.value = "";
	}
}

addBtn.addEventListener("click", addItem);
searchBtn.addEventListener("click", searchItems);
