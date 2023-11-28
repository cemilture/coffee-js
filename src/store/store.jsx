import coffeeReducer from "../reducers/coffeeReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: coffeeReducer,
});

export default store;
