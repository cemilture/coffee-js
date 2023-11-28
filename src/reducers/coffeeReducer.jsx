import {
  FETCH_COFFEES,
  FILTER_BY_CATEGORY,
  SEARCH_COFFEE,
} from "../actions/coffeeAction";
import { coffeesDB } from "../database/coffees";

const initialState = {
  coffees: coffeesDB,
  filteredCoffees: [],
  searchTerm: "",
  selectedCategory: "",
};

const filterCoffeesByCategory = (coffees, category) => {
  if (category === "") return coffees;
  return coffees.filter((coffee) => coffee.category === category);
};

const searchCoffees = (coffees, searchTerm) => {
  if (searchTerm === "") return coffees;
  const lowerCaseTerm = searchTerm.toLowerCase();
  return coffees.filter(
    (coffee) =>
      coffee.title.toLowerCase().includes(lowerCaseTerm) ||
      coffee.description.toLowerCase().includes(lowerCaseTerm)
  );
};

const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COFFEES:
      return {
        ...state,
        coffees: [...coffeesDB],
        filteredCoffees: [...coffeesDB],
      };

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
        filteredCoffees: filterCoffeesByCategory(state.coffees, action.payload),
      };

    case SEARCH_COFFEE:
      return {
        ...state,
        searchTerm: action.payload,
        filteredCoffees: searchCoffees(state.coffees, action.payload),
      };

    default:
      return state;
  }
};

export default coffeeReducer;
