import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza</Link>

      <p>Byron Ochara</p>
      <SearchOrder />
      
    </header>
  );
}

export default Header;
