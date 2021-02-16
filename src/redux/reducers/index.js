import { combineReducers } from "redux"
import categories from "./categories"
import accessoriesReducer from "./accessoriesReducer"

export default combineReducers({
  categories,
  acc: accessoriesReducer,
})
