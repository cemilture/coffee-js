export const FETCH_COFFEES = "FETCH_COFFEES";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const SEARCH_COFFEE = "SEARCH_COFFEE";

export const fetchCoffees = () => ({
  type: FETCH_COFFEES,
});

export const filterByCategory = (category) => ({
  type: FILTER_BY_CATEGORY,
  payload: category,
});

export const searchCoffee = (searchTerm) => ({
  type: SEARCH_COFFEE,
  payload: searchTerm,
});
