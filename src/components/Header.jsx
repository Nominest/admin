import "../style/header.css";

export default function Header() {
  return (
    <header>
      <div>
        <img src="./E-logo.svg" alt="" />
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search anything" />
        <button className="search">
          <a href="">Search</a>
        </button>
      </div>
      <div className="signin">
        <ul>
          <li>
            <button>Sign In</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
