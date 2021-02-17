const initialState = {
  money: 3000,
  mycomp: [
    {
      title: "Pentium 800",
      sku: "skupentium",
      price: 0,
      parameters: 1,
      image: "",
      category: "Компютери",
    },
  ],
  myphone: {
    title: "Samsung   L-Bello",
    sku: "skusams",
    price: 0,
    parameters: 1,
    image: "",
    category: "Телефони",
  },
  videos: [
    { name: "Mazda", rnd: 1, key: 1 },
    { name: "Audi", rnd: 2, key: 2 },
    { name: "Opel", rnd: 3, key: 3 },
    { name: "Toyota", rnd: 4, key: 4 },
  ],
}

const ADD_TO_CART = "ADD_TO_CART"
// const DELETE_FROM_CART = "DELETE_FROM_CART"
// const CHANGE_QUANTITY = "CHANGE_QUANTITY"
// const CLEAR_CART = "CLEAR_CART"

// export const clearCart = () => {
//   return { type: CLEAR_CART }
// }

export const addBook = book => {
  return { type: ADD_TO_CART, book }
}
// export const deleteBook = sku => ({ type: DELETE_FROM_CART, sku })

// export const changeQuantity = ({ sku, counter }) => {
//   if (counter < 1) {
//     return { type: DELETE_FROM_CART, sku }
//   }
//   return { type: CHANGE_QUANTITY, sku, counter }
// }

export default function accessoriesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      action.book.counter = 1
      action.book.total = action.book.price
      if (state.find(book => book.sku === action.book.sku)) {
        return state
      }
      return [...state, action.book]
    // case CHANGE_QUANTITY:
    //   return state.map(book => {
    //     if (book.sku !== action.sku) {
    //       return book
    //     }
    //     return {
    //       ...book,
    //       ...action.counter,
    //     }
    //   })
    // case CLEAR_CART:
    //   return initialState

    // case DELETE_FROM_CART:
    //   let newList = state.filter(book => {
    //     return action.sku !== book.sku
    //   })
    //   return newList
    /* falls through */
    default:
      return state
  }
}
