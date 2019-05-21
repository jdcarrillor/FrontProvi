import React, { Component } from 'react';
import '../css/usuarioStyle.css';

import {Link} from 'react-router-dom';
import {FormattedMessage} from "react-intl";

class Usuario extends Component{
  render(){
    return(
      <div className="card text-center">
      <div className="overflow">
        <img className='card-img-top' src={this.props.data.src} alt="user"></img>
      </div>
        <div className="card-body text-dark">

        <h1 className="card-title">{this.props.data.nombre}</h1>
        <p className="card-text text-secondary"><FormattedMessage id="User"/>: {this.props.data.username}</p>
        <p className="card-text text-secondary"><FormattedMessage id="Email"/>: {this.props.data.email}</p>

        <h1 className="card-title" style={{backgroundColor:"#FFFFFF"}}>{this.props.data.nombre}</h1>
        <p className="card-text text-secondary" style={{backgroundColor:"#FFFFFF"}}><FormattedMessage id="User"/>: {this.props.data.username}</p>
        <p className="card-text text-secondary" style={{backgroundColor:"#FFFFFF"}}><FormattedMessage id="Email"/>: {this.props.data.email}</p>

        <Link to={{
          pathname:"/UsuarioDetail/"+this.props.data.id,
        }}  className="btn3" data={this.props.data}><FormattedMessage id="MoreDetails"/><span className="bg"></span></Link>
        </div>
      </div>
    );
  }
}
export default Usuario;