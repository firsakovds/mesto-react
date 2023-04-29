import "../styles/index.css"
import logo from "../images/header-logo.svg"


function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />   
    </header>
  )
}
export default Header;