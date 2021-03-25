export const loadState = () => {
  try {
    const serialized_State = localStorage.getItem("state")

    if (serialized_State === null) {
      return undefined
    }
    return JSON.parse(serialized_State)
  } catch (err) {
    return undefined
  }
}

export const saveState = state => {
  try {
    const serialized_State = JSON.stringify(state)
    localStorage.setItem("state", serialized_State)
  } catch (err) {
    console.error("save state error: ", err)
  }
}
