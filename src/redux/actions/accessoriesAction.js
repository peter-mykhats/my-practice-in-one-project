import { BUY_ACCESSORIES, MONEY_SPENT } from "../types"

export const Bay = comp => ({
  type: BUY_ACCESSORIES,
  //   payload: comp.sku,
  title: comp.frontmatter.title,
  parameters: comp.frontmatter.parameters,
  price: comp.frontmatter.price,
  //   img: comp.img,
})

export const MoneySpent = comp => ({
  type: MONEY_SPENT,
  moneySpent: comp.frontmatter.price,
})
