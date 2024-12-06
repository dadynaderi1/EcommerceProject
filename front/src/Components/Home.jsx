import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 

const Header = () => {
  return (
    <header className="header">
      
      <div className="header__logo">
        <Link to="/">
          <img src="/front/public/logo192.png" alt="Shop Logo" className="logo" />
        </Link>
      </div>

      
      <div className="header__search">
        <input type="text" placeholder="جستجو محصولات..." className="search-input" />
        <button className="search-btn">جستجو</button>
      </div>

    
      <nav className="header__nav">
        <Link to="/category/electronics">لیست محصولات</Link>
        <Link to="/category/fashion">لوازم ارایشی و بهداشتی</Link>
        <Link to="/category/home">درباره ما</Link>
      </nav>

      
      <div className="header__cart">
        <Link to="/cart" className="cart-link">
          <img src="/front/public/logo512.png" alt="Cart" className="cart-icon" />
          <span className="cart-count">2</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
