// Footer.js

import React from 'react';
import './styles/Footer.css'; // Assuming your CSS is saved as Footer.css
import logo from '../components/HomePageStyle/logo.png'; // Update path accordingly

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contact">
        <img src={logo} alt="Shukur Logo" className="footer-logo" />
        <p>+7(705) 530 65 19</p>
        <p>shukurlinfo@gmail.com</p>
        <p>050040 Казахстан, Алматы, Манаса 30/1</p>
      </div>
      <div className="footer-nav">
        <ul>
          <li><a href="/">Главная</a></li>
          <li><a href="/contacts">Контакты</a></li>
          <li><a href="/prayer-times">Время намаза</a></li>
        </ul>
        <ul>
          <li><a href="/products">Продукты</a></li>
          <li><a href="/add-product">Добавить продукт</a></li>
          <li><a href="/blog">Блог</a></li>
        </ul>
        <ul>
          <li><a href="/account">Личный кабинет</a></li>
          <li><a href="/view-products">Просмотр продуктов</a></li>
        </ul>
      </div>
      <div className="footer-search">
        <input type="text" placeholder="Поиск" />
      </div>
    </div>
  );
};

export default Footer;
