import React from 'react'
import '../css/nav.css';
import {FormattedMessage} from "react-intl";

const NavBar =(props)=> (



      <nav className="my-navbar navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand"  href="/"><h2 className="gft">GiftNow</h2></a>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/"><FormattedMessage id="Home"/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link my-nav-link" href="/Promociones" ><FormattedMessage id="Promotions"/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/ProductoList"><FormattedMessage id="Products"/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/TarjetaRegaloList"><FormattedMessage id="Cards"/></a>
          </li>
            <li className="nav-item">
            <a className="nav-link" hidden={!props.logged} href="/CuponList"><FormattedMessage id="Coupon"/></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/TiendaList"><FormattedMessage id="Stores"/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/MarcaList"><FormattedMessage id="Brands"/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/DestinoList"><FormattedMessage id="Destinations"/></a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" hidden={!props.ADMIN} href="/UsuarioList"><FormattedMessage id="Users"/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" hidden={!props.ADMIN} href="/FacturaList"><FormattedMessage id="Bills"/></a>
          </li>
          <li className="nav-item">
          <form className="form-inline my-2 my-md-0">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </form>
          </li>
        </ul>

        <ul className="navbar-nav mr-auto">
        <li className="nav-item active" hidden={props.logged}>
          <a className="nav-link" href="/registro"><FormattedMessage id="Register"/></a>
        </li>
        <li className="nav-item active" hidden={props.logged}>
          <a className="nav-link" href="/login"><FormattedMessage id="Login"/></a>
        </li>
        <li className="nav-item active" hidden={!props.logged}>
            <a className="nav-link" href="/" onClick={props.logout}><FormattedMessage id="Logout"/></a>
        </li>

        <li className="nav-item active">
          <a className="nav-link" href="#"><img className="abr" src="http://icon-park.com/imagefiles/shopping_cart_pink.png" alt="Car"></img></a>
        </li>
        <li className="nav-item active" hidden={!props.logged || props.ADMIN}>
          <a className="nav-link" href="#"><img className="abr" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-female-circle-pink-512.png" alt="UserIcon"></img></a>
        </li>
        </ul>
      </div>
    </nav>

);

export default NavBar;
