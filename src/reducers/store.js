import { configureStore } from "@reduxjs/toolkit";

import wordleReducer from "./wordleReducer";

const Store = configureStore({
  reducer: wordleReducer
});

export default Store;
