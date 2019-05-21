import React, { Component } from 'react';
import '../css/facturaStyle.css';

import {Link} from 'react-router-dom';
import {FormattedMessage} from "react-intl";
import detectBrowserLanguage from 'detect-browser-language';

class Factura extends Component{

  constructor(props){
    super(props);
    this.state={
      payment:"",
      store:""
    };
  }

  componentDidMount() {
    var s= this.state;
    s.payment=this.props.data.formaDePago;
    this.setState(s);
    if(this.props.data.formaDePago.search("Tarjeta de crédito")===0 && detectBrowserLanguage()==='en'){
      var stateAB = this.state;
      var a=this.props.data.formaDePago.replace("Tarjeta de crédito", "");
      var b=a.concat(" ", "Credit card");
      stateAB.payment=b;
      this.setState(stateAB);
    }
    else if(this.props.data.formaDePago.search("Efectivo")===0 && detectBrowserLanguage()==='en'){
      var stateCD = this.state;
      var c=this.props.data.formaDePago.replace("Efectivo", "");
      var d=c.concat(" ", "Cash");
      stateCD.payment=d;
      this.setState(stateCD);
    }
    s.store=this.props.data.tienda;
    if(this.props.data.tienda.search("Tarjetas Maguz")===0 && detectBrowserLanguage()==='en'){
      var stateEF = this.state;
      var e=this.props.data.tienda.replace("Tarjetas Maguz", "");
      var f=e.concat(" ", "Maguz cards");
      stateEF.store=f;
      this.setState(stateEF);
    }
    else if(this.props.data.tienda.search("Reebok")===0 && detectBrowserLanguage()==='en'){
      var stateGH = this.state;
      var g=this.props.data.tienda.replace("Reebok", "");
      var h=g.concat(" ", "Reebok");
      stateGH.store=h;
      this.setState(stateGH);
    }
    else if(this.props.data.tienda.search("BookStore")===0 && detectBrowserLanguage()==='en'){
      var stateIJ = this.state;
      var i=this.props.data.tienda.replace("BookStore", "");
      var j=i.concat(" ", "BookStore");
      stateIJ.store=j;
      this.setState(stateIJ);
    }
    else if(this.props.data.tienda.search("Cosechas")===0 && detectBrowserLanguage()==='en'){
      var stateKL = this.state;
      var k=this.props.data.tienda.replace("Cosechas", "");
      var l=k.concat(" ", "Harvests");
      stateKL.store=l;
      this.setState(stateKL);
    }
  }

  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.src} alt='tipo'/>
        </div>
        <div className="card-body text-dark">
        <h1 className="card-title">$COP {this.props.data.valorCompra}</h1>
        <p className="card-text text-secondary"><FormattedMessage id="Payment"/>: {this.state.payment}</p>
        <p className="card-text text-secondary"><FormattedMessage id="Destination"/>: {this.props.data.destino}</p>
        <p className="card-text text-secondary"><FormattedMessage id="Store"/>: {this.state.store}</p>
        <img className='card-img-top' src={this.props.data.srcTarjeta} alt='tarj'/>
        <p className="card-text text-secondary"><FormattedMessage id="GiftCard"/>: <FormattedMessage id={this.props.data.tarjetaRegalo}/></p>
        <Link to={{
          pathname:"/FacturaDetail/"+this.props.data.id,
        }}  className="btn3" data={this.props.data}><FormattedMessage id="MoreDetails"/><span className="bg"></span></Link>        
        </div>
      </div>
    );
  }
}
export default Factura;