import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./reducers"
import { loadState, saveState } from "./localStorage"

const persistedState = loadState()

const windowGlobal = typeof window !== "undefined" && window
const devtools =
  process.env.NODE_ENV === "development" && windowGlobal.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f

const store = createStore(rootReducer, persistedState, devtools)

store.subscribe(() => {
  saveState(store.getState())
})

export default ({ element }) => <Provider store={store}>{element}</Provider>
