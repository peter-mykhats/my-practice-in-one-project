import { BUY_ACCESSORIES, MONEY_SPENT } from "../types"

const initialState = {
  money: 3000,
  mycomp: {
    title: "Pentium 800",
    sku: "skupentium",
    price: 0,
    parameters: 1,
    image: "",
    category: "Компютери",
  },
  myphone: {
    title: "Samsung   L-Bello",
    sku: "skusams",
    price: 0,
    parameters: 1,
    image: "",
    category: "Телефони",
  },
  mycamera: {
    title: "Встроєна камера на телефоні Samsung   L-Bello",
    sku: "skucamsams",
    price: 0,
    parameters: 1,
    image: "",
    category: "Камери",
  },
  videos: [
    { name: "Mazda", rnd: 1, key: 1 },
    { name: "Audi", rnd: 2, key: 2 },
    { name: "Opel", rnd: 3, key: 3 },
    { name: "Toyota", rnd: 4, key: 4 },
  ],
}

export default function accessoriesReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_ACCESSORIES:
      if (action.category === "Телефони") {
        return {
          ...state,
          myphone: {
            // id: action.payload,
            title: action.title,
            // img: action.img,
            parameters: action.parameters,
            price: action.price,
          },
        }
      }

      if (action.category === "Компютери") {
        return {
          ...state,
          mycomp: {
            // id: action.payload,
            title: action.title,
            // img: action.img,
            parameters: action.parameters,
            price: action.price,
          },
        }
      }
      if (action.category === "Камери") {
        return {
          ...state,
          mycamera: {
            // id: action.payload,
            title: action.title,
            // img: action.img,
            parameters: action.parameters,
            price: action.price,
          },
        }
      }

      return {
        ...state,
        mycomp: {
          // id: action.payload,
          title: action.title,
          // img: action.img,
          parameters: action.parameters,
          price: action.price,
        },
      }

    case MONEY_SPENT:
      return {
        ...state,
        money: state.money - action.moneySpent,
      }
    // -----
    // action.book.counter = 1
    // action.book.total = action.book.price
    // if (state.find(book => book.sku === action.book.sku)) {
    //   return state
    // }
    // return [...state, action.book]
    // =====

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
