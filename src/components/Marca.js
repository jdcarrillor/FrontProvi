import React, { Component } from 'react';
import {FormattedMessage} from "react-intl";
import detectBrowserLanguage from 'detect-browser-language';

import '../css/producto-style.css';
import {Link} from 'react-router-dom';
class Marca extends Component{

  constructor(props){
    super(props);
    this.state={
      descripcion:"",
    };
  }

  componentDidMount() {
    var s= this.state;
    s.descripcion=this.props.data.descripcion;
    this.setState(s);
    if(this.props.data.descripcion.search("Marca de ropa, accesorios y maletas de costo medio")===0 && detectBrowserLanguage()==='en'){
      var stateAB = this.state;
      var a=this.props.data.descripcion.replace("Marca de ropa, accesorios y maletas de costo medio", "");
      var b=a.concat(" ", "Accessories, clothes and bags mid price brand");
      stateAB.descripcion=b;
      this.setState(stateAB);
    }
    else if(this.props.data.descripcion.search("Marca de ropa y accesorios de lujo")===0 && detectBrowserLanguage()==='en'){
      var stateCD = this.state;
      var c=this.props.data.descripcion.replace("Marca de ropa y accesorios de lujo", "");
      var d=c.concat(" ", "Accessories and clothes luxury  brand");
      stateCD.descripcion=d;
      this.setState(stateCD);
    }
    else if(this.props.data.descripcion.search("Marca de ropa y accesorios")===0 && detectBrowserLanguage()==='en'){
      var stateEF = this.state;
      var e=this.props.data.descripcion.replace("Marca de ropa y accesorios", "");
      var f=e.concat(" ", "Accessories and clothes brand");
      stateEF.descripcion=f;
      this.setState(stateEF);
    }
    else if(this.props.data.descripcion.search("Maraca de ropa, accesorios y zapatos de lujo")===0 && detectBrowserLanguage()==='en'){
      var stateGH = this.state;
      var g=this.props.data.descripcion.replace("Maraca de ropa, accesorios y zapatos de lujo", "");
      var h=g.concat(" ", "Luxury accessories, clothes and footwear brand");
      stateGH.descripcion=h;
      this.setState(stateGH);
    }
     else if(this.props.data.descripcion.search("Marca de ropa y calzado")===0 && detectBrowserLanguage()==='en'){
      var stateIJ = this.state;
      var i=this.props.data.descripcion.replace("Marca de ropa y calzado", "");
      var j=i.concat(" ", "Clothes and footwear brand");
      stateIJ.descripcion=j;
      this.setState(stateIJ);
    }
    else if(this.props.data.descripcion.search("Marca de ropa, accesorios y calzado de lujo")===0 && detectBrowserLanguage()==='en'){
      var stateKL = this.state;
      var k=this.props.data.descripcion.replace("Marca de ropa, accesorios y calzado de lujo", "");
      var l=k.concat(" ", "Accessories , clothes and footwear luxury  brand");
      stateKL.descripcion=l;
      this.setState(stateKL);
    }

      else if(this.props.data.descripcion.search("Marca de calzado casual")===0 && detectBrowserLanguage()==='en'){
      var stateMN = this.state;
      var m=this.props.data.descripcion.replace("Marca de calzado casual", "");
      var n=m.concat(" ", "Casual footwear brand");
      stateMN.descripcion=n;
      this.setState(stateMN);
    }
  }
  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.imagen} alt='Image1'/>
        </div>
        <div className="card-body text-dark">
        <h1 className="card-title">{this.props.data.nombre}</h1>
        <p className="card-text text-secondary">{this.state.descripcion}</p>
        <Link to={{
          pathname:"/MarcaDetail/"+this.props.data.id,
        }}  className="btn3" data={this.props.data}><FormattedMessage id="MoreDetails"/></Link>
        </div>
      </div>
    );
  }
}
export default Marca;
