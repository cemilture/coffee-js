import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import {
  fetchCoffees,
  filterByCategory,
  searchCoffee,
} from "./actions/coffeeAction";
import CoffeList from "./components/CoffeeList";

function App() {
  const dispatch = useDispatch();
  const coffeeState = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCoffees());
  }, [dispatch]);

  const handleCategoryFilter = (category) => {
    dispatch(filterByCategory(category));
  };

  const handleSearch = (searchTerm) => {
    dispatch(searchCoffee(searchTerm));
  };

  return (
    <div className="container">
      <div className="button-container">
        <h1>Coffee App</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search coffee..."
            value={coffeeState.searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={() => handleSearch("")}>Clear</button>
        </div>
        <button onClick={() => handleCategoryFilter("")}>
          Show All Coffees
        </button>
        <button onClick={() => handleCategoryFilter("hot")}>
          Show Hot Coffees
        </button>
        <button onClick={() => handleCategoryFilter("iced")}>
          Show Iced Coffees
        </button>
      </div>
      <hr />
      <div className="coffeeList-container">
        <CoffeList />
      </div>
    </div>
  );
}

export default App;
