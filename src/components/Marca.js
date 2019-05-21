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
      var stateAB = this.state;
      var a=this.props.data.descripcion.replace("Marca de ropa y accesorios de lujo", "");
      var b=a.concat(" ", "Accessories and clothes luxury  brand");
      stateAB.descripcion=b;
      this.setState(stateAB);
    }
    else if(this.props.data.descripcion.search("Marca de ropa y accesorios")===0 && detectBrowserLanguage()==='en'){
      var stateAB = this.state;
      var a=this.props.data.descripcion.replace("Marca de ropa y accesorios", "");
      var b=a.concat(" ", "Accessories and clothes brand");
      stateAB.descripcion=b;
      this.setState(stateAB);
    }
    else if(this.props.data.descripcion.search("Maraca de ropa, accesorios y zapatos de lujo")===0 && detectBrowserLanguage()==='en'){
      var stateAB = this.state;
      var a=this.props.data.descripcion.replace("Maraca de ropa, accesorios y zapatos de lujo", "");
      var b=a.concat(" ", "Luxury accessories, clothes and footwear brand");
      stateAB.descripcion=b;
      this.setState(stateAB);
    }
     else if(this.props.data.descripcion.search("Marca de ropa y calzado")===0 && detectBrowserLanguage()==='en'){
      var stateAB = this.state;
      var a=this.props.data.descripcion.replace("Marca de ropa y calzado", "");
      var b=a.concat(" ", "Clothes and footwear brand");
      stateAB.descripcion=b;
      this.setState(stateAB);
    }
    else if(this.props.data.descripcion.search("Marca de ropa, accesorios y calzado de lujo")===0 && detectBrowserLanguage()==='en'){
      var stateAB = this.state;
      var a=this.props.data.descripcion.replace("Marca de ropa, accesorios y calzado de lujo", "");
      var b=a.concat(" ", "Accessories , clothes and footwear luxury  brand");
      stateAB.descripcion=b;
      this.setState(stateAB);
    }

      else if(this.props.data.descripcion.search("Marca de calzado casual")===0 && detectBrowserLanguage()==='en'){
      var stateAB = this.state;
      var a=this.props.data.descripcion.replace("Marca de calzado casual", "");
      var b=a.concat(" ", "Casual footwear brand");
      stateAB.descripcion=b;
      this.setState(stateAB);
    }

    




    
  }
  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.props.data.imagen} alt='Image 1'/>
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
