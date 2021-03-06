import React from 'react';
import { arrayListDownCenter, arrayListDownRight, logo, coronavirus } from './data';
import { NavLink } from 'react-router-dom';
import './Navbar.css'



const Navbar = () => {


  return (
    <nav className="navbar">
      <div className="navbar__hidden">
        <div className="navbar__high__block__hidden">
          <div className="navbar__high__left__hidden">
            <i class="navbar__high__icon__hidden fas fa-align-justify"></i>
          </div>
          <div className="navbar__high__center__hidden">
            <input className="navbar__high__input--hidden" placeholder="Buscar productos, marcas y más..."></input>
          </div>
          <div className="navbar__high__right__hidden">
            <i class="navbar__high__icon__hidden fas fa-shopping-cart"></i>
          </div>
        </div>
        <div className="navbar__high__block__down__hidden">
          <div className="navbar__high__left__send__hidden">
            <i class="navbar__high__icon__left__hidden fas fa-map-marker-alt"></i>
            <h5 className="navbar__high__title__left__hidden style-font">Enviar a Juan Perez</h5>
          </div>
          <div className="navbar__high__center__down__hidden">
            <i className="navbar__high__icon__down__hidden fas fa-angle-right"></i>
          </div>
        </div>
      </div>
      <>
        <div className="navbar__high">
          <div className="navbar__high__input--meli">
            <img src={logo} className="navbar__high__img--logo" alt="alt narvar"></img>
          </div>
          <div className="navbar__high__block">
            <input className="navbar__high__input"
              placeholder="Buscar productos, marcas y más..."></input>
            <div className="navbar__high__block__icon">
              <i className="navbar__high__icon fas fa-search"></i>
            </div>
          </div>
          <div className="navbar__high__input--coronavirus">
            <img src={coronavirus} className=" navbar__high__img--coronavirus" alt="alt navbar"></img>
          </div>
        </div>
        <div className="navbar__down">
          <div className="navbar__down__send">
            <div>
              <i className="navbar__down__send__icon fas fa-map-marker-alt"></i>
            </div>
            <div className="navbar__down__block">
              <h5 className="navbar__down__block__description">Enviar a Juan Perez</h5>
              <h5 className="navbar__down__block__title">Enviar a Rosello</h5>
            </div>
          </div>
          <ul className="navbar__down__list--center">
            {arrayListDownCenter.map((item, index) =>
              <li key={index} className="navbar__down__list--center__item">
                <NavLink to=""> {item.name} <i className={`navbar__down__list--center__icon ${item.icon}`}>
                </i></NavLink></li>)}
          </ul>
          <ul className="navbar__down__list--right">
            {arrayListDownRight.map((item, index) =>
              <li key={index} className="navbar__down__list--right__item">
                <i className={`navbar__down__list--center__icon--user ${item.iconUser}`}></i>
                <NavLink to={item.name}> {item.name} <i className={`navbar__down__list--center__icon ${item.icon}`}>
                </i></NavLink></li>)}
          </ul>
        </div>
      </>
    </nav>
  )
}

export default Navbar;