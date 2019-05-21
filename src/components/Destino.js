import React, { Component } from 'react';
import '../css/destinoStyle.css';

import {Link} from 'react-router-dom';
import {FormattedMessage} from "react-intl";
import detectBrowserLanguage from 'detect-browser-language';

class Destino extends Component{

  constructor(props){
    super(props);
    this.state={
      direccion:"",
    };
  }

  componentDidMount() {
    var s= this.state;
    s.direccion=this.props.data.direccion;
    this.setState(s);
    if(this.props.data.direccion.search("Centro internacional")===0 && detectBrowserLanguage()==='en'){
      var stateAB = this.state;
      var a=this.props.data.direccion.replace("Centro internacional", "");
      var b=a.concat(" ", "International center");
      stateAB.direccion=b;
      this.setState(stateAB);
    }
    else if(this.props.data.direccion.search("El rodadero")===0 && detectBrowserLanguage()==='en'){
      var stateCD = this.state;
      var c=this.props.data.direccion.replace("El rodadero", "");
      var d=c.concat(" ", "Rodadero");
      stateCD.direccion=d;
      this.setState(stateCD);
    }
    else if(this.props.data.direccion.search("La ciudad sorpresa")===0 && detectBrowserLanguage()==='en'){
      var stateEF = this.state;
      var e=this.props.data.direccion.replace("La ciudad sorpresa", "");
      var f=e.concat(" ", "The surprise city");
      stateEF.direccion=f;
      this.setState(stateEF);
    }
    else if(this.props.data.direccion.search("El cayo acuario")===0 && detectBrowserLanguage()==='en'){
      var stateGH = this.state;
      var g=this.props.data.direccion.replace("El cayo acuario", "");
      var h=g.concat(" ", "El cayo acuarium");
      stateGH.direccion=h;
      this.setState(stateGH);
    }
    else if(this.props.data.direccion.search("Parque Arví")===0 && detectBrowserLanguage()==='en'){
      var stateIJ = this.state;
      var i=this.props.data.direccion.replace("Parque Arví", "");
      var j=i.concat(" ", "Arví park");
      stateIJ.direccion=j;
      this.setState(stateIJ);
    }
    else if(this.props.data.direccion.search("Monserrate")===0 && detectBrowserLanguage()==='en'){
      var stateKL = this.state;
      var k=this.props.data.direccion.replace("Monserrate", "");
      var l=k.concat(" ", "Monserrate");
      stateKL.direccion=l;
      this.setState(stateKL);
    }
    else if(this.props.data.direccion.search("Desierto de la Tatacoa")===0 && detectBrowserLanguage()==='en'){
      var stateMN = this.state;
      var m=this.props.data.direccion.replace("Desierto de la Tatacoa", "");
      var n=m.concat(" ", "Desert of the Tatacoa");
      stateMN.direccion=n;
      this.setState(stateMN);
    }
    else if(this.props.data.direccion.search("La Candelaria")===0 && detectBrowserLanguage()==='en'){
      var stateOP = this.state;
      var o=this.props.data.direccion.replace("La Candelaria", "");
      var p=o.concat(" ", "Candelaria");
      stateOP.direccion=p;
      this.setState(stateOP);
    }
    else if(this.props.data.direccion.search("La Laguna de la Cocha")===0 && detectBrowserLanguage()==='en'){
      var stateQR = this.state;
      var q=this.props.data.direccion.replace("La Laguna de la Cocha", "");
      var r=q.concat(" ", "The Cocha lagoon");
      stateQR.direccion=r;
      this.setState(stateQR);
    }
  }

  render(){
    return( 
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.src} alt='recurso'/>
        </div>
        <div className="card-body text-dark">

        <h1 className="card-title">{this.props.data.ciudad}</h1>

        <h1 className="card-title" style={{backgroundColor:"#FFFFFF"}}>{this.props.data.ciudad}</h1>

        <p className="card-text text-secondary"><FormattedMessage id="Direction"/>: {this.state.direccion}</p>
        <p className="card-text text-secondary"><FormattedMessage id="Email"/>: {this.props.data.email}</p>
        <Link to={{
          pathname:"/DestinoDetail/"+this.props.data.id,
        }}  className="btn3" data={this.props.data}><FormattedMessage id="MoreDetails"/><span className="bg"></span></Link>
        </div>
      </div>
    );
  }
}
export default Destino;