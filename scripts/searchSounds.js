import { debounce } from './commonUtils.js';

const searchInput = document.querySelector(".search-input");
const soundCards = document.querySelectorAll(".sound-card");
const categories = document.querySelectorAll(".category");
const noResults = document.querySelector(".no-results");

const onSearch = debounce(() => {
  searchInput.dispatchEvent(new Event("search"));

  const filter = searchInput.value.toLowerCase();

  soundCards.forEach((card) => {
    const name = card.querySelector("p").textContent.toLowerCase();
    card.style.display = name.includes(filter) ? "block" : "none";
  });

  let visibleCategoryCount = 0;

  categories.forEach((category) => {
    const cards = category.querySelectorAll(".sound-card");
    const hasVisible = Array.from(cards).some(
      (card) => card.style.display !== "none"
    );

    category.style.display = hasVisible ? "block" : "none";
    if (hasVisible) visibleCategoryCount++;
  });

  noResults.style.display = visibleCategoryCount === 0 ? "block" : "none";
}, 350);

searchInput?.addEventListener("input", onSearch);
