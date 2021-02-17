import React from "react"

const Nav = () => {
  return (
    <div>
      <div id={"background"}></div>
      <div id={"fab"}>&#43;</div>
      <header id={"page-header"}>
        <a id={"hamburger"} href={"#sidebar-nav"} target={"_self"}>
          <span className={"line"}></span>
          <span className={"line"}></span>
          <span className={"line"}></span>
        </a>
      </header>
      <nav id={"sidebar-nav"}>
        <header id={"sidebar-header"}>
          <a
            id={"codepen-link"}
            href="https://www.codepen.io/seanfree"
            target={"_blank"}
          ></a>
          <div id={"profile-info"}>
            <h3 id={"profile-name"}>Sean Free</h3>
            <h4 id={"blurb"}>Rogue Webonaut</h4>
          </div>
          <a id="btn-more">
            <span className={"dot"}></span>
            <span className={"dot"}></span>
            <span className={"dot"}></span>
          </a>
          <ul id={"sidebar-nav-list"}>
            <li className={"sidebar-nav-item"} id={"nav-item-home"}>
              <a href="#">
                <i className={"material-icons"}>home</i>Home
              </a>
            </li>
            <li className={"sidebar-nav-item"} id={"nav-item-social"}>
              <a href="#">
                <i className={"material-icons"}>people</i>Social
              </a>
            </li>
            <li className={"sidebar-nav-item"} id={"nav-item-mail"}>
              <a href="#">
                <i className={"material-icons"}>mail</i>Mail
              </a>
            </li>
            <li className={"sidebar-nav-item"} id={"nav-item-pictures"}>
              <a href="#">
                <i className={"material-icons"}>photo_library</i>Pictures
              </a>
            </li>
            <li className={"sidebar-nav-item"} id={"nav-item-music"}>
              <a href="#">
                <i className={"material-icons"}>library_music</i>Music
              </a>
            </li>
            <li className={"sidebar-nav-item"} id={"nav-item-files"}>
              <a href="#">
                <i className={"material-icons"}>folder</i>Files
              </a>
            </li>
            <li className={"sidebar-nav-item"} id={"nav-item-settings"}>
              <a href="#">
                <i className={"material-icons"}>settings</i>Settings
              </a>
            </li>
            <li className={"sidebar-nav-item"} id={"nav-item-close"}>
              <a href="#">
                <i className={"material-icons"}>close</i>Close
              </a>
            </li>
          </ul>
        </header>
      </nav>
      <a id={"nav-screen-overlay"} href="#" target={"_self"}></a>
    </div>
  )
}
export default Nav
