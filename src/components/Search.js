import React, { useState } from "react"

const Search = () => {
  const [search, setSearch] = useState("")
  // const [valueInput, setValue] = useState("")
  console.log(search)

  const searchToggle = (obj, event) => {
    var container = obj.closest(".search-wrapper")
    if (!container.hasClass("active")) {
      container.addClass("active")
      event.preventDefault()
    } else if (
      container.hasClass("active") &&
      obj.closest("input-holder").length === 0
    ) {
      container.removeClass("")
      // clear input
      container.find("search-input").val("")
    }
  }
  return (
    <div className={"search-wrapper" + search}>
      <div className={"input-holder"}>
        <input
          type="text"
          className={"search-input"}
          placeholder="Type to search"
        />
        <button className={"search-icon"} onClick={() => setSearch(" active")}>
          <span></span>
        </button>
      </div>
      <span className={"close"} onClick={() => setSearch("")}></span>
    </div>
  )
}

export default Search
