import React, { Component } from 'react';
import {FormattedMessage} from "react-intl";

import '../css/producto-style.css';
import {Link} from 'react-router-dom';
import detectBrowserLanguage from 'detect-browser-language';
class Tienda extends Component{
    constructor(props){
    super(props);
    this.state={
      direccion:"lol",
    };
  }
componentDidMount() {
  var s= this.state;
  s.direccion=this.props.data.direccion;
  this.setState(s);
  if(this.props.data.direccion.search("Calle")===0&&detectBrowserLanguage()==='en'){
    var state = this.state;
    var a=this.props.data.direccion.replace("Calle", "");
    console.log("entré");
    console.log(a);
    var b=a.concat(" ", "Street");
    state.name=b;
    this.setState(state);
  }

}
  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.imagen} alt='recurso'/>
        </div>
        <div className="card-body text-dark">
        <h1 className="card-title">{this.props.data.nombre}</h1>
        <p className="card-text text-secondary"><FormattedMessage id="Direction"/>: {this.state.direccion}</p>
        <Link to={{
          pathname:"/TiendaDetail/"+this.props.data.id,
        }}  className="btn3" data={this.props.data}><FormattedMessage id="MoreDetails" /></Link>
        </div>
        
    
      </div>
    );
  }
}
export default Tienda;
