import React, { useState } from 'react'
import closebtn from '../img/x.svg';
import openBnt from '../img/menu.svg';
import search from '../img/search.svg';
import account from '../img/user.svg';

const Navbar = () => {
  const [imgButton, setMenuButton] = useState(openBnt);
  const [menuClass, setMenuClass] = useState('menu');

  function principal() {
    setMenuButton(imgButton === openBnt ? closebtn : openBnt);
    setMenuClass(menuClass === 'menu' ? 'menu responsive' : 'menu');
  }
  return (
    <>
      <div className="navBar">
        <img onClick={principal} src={imgButton} id="menuButton" className="menuButton" />
        <div></div>
        <h2 className="title">Productos Sm</h2>
        <img className="profileImage" src="" alt="image" />
      </div>
      <div id="menu" className={menuClass}>
        <ul>
          <li>Inicio</li>
          <li>Ofertas</li>
          <li>Categorias</li>
          <li>Mis Envíos</li>
          <li></li>
        </ul>
        <div className="coverMenu"></div>
        <div className="rightTopBar">
          <ul>

            <img className="iframe" src={search} frameborder="0" />
            <img className="iframe" src={account} alt="" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
