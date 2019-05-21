import React, { Component } from 'react';

import '../css/producto-style.css';
import {Link} from 'react-router-dom';
import {FormattedMessage} from "react-intl";
import axios from 'axios'
class Promocion extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      IDmarcas:[],
      IDtiendas:[],
      tienda:"",
      marcas:[]
    };
  }

  componentDidMount() {
        const a=this.props.data.marcas
        console.log(a.length);
        var i;
        for (i = 0; i < a.length; i++){
            axios.get('https://regalayapp1.herokuapp.com/marcas/'+this.props.data.marcas[i].idMarca)
                .then((response) => {
                    var state = this.state;
                    var marca = response.data;
                    state.marcas.push(marca.imagen);
                    console.log(state.marcas[1]);
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
              }
              axios.get('https://regalayapp1.herokuapp.com/tiendas/'+this.props.data.idTienda)
                  .then((response) => {
                      var state = this.state;
                      var tienda = response.data;
                      console.log(tienda);
                      state.tienda =tienda.imagen;
                      state.pagina = 0;
                      // pueden cambiar el tamaño de partion aca
                      this.setState(state);
                  });
    }
  render(){
    return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.state.tienda} alt='tienda'/>
        </div>
        <div className="card-body text-dark">
        <h1 className="card-title">{this.props.data.nombre}</h1>
        </div>
        <div className="row">
        <div className="overflow">
          <img className='card-img-top down' src={this.state.marcas[0]} alt='marca1'/>
        </div>
        <div className="overflow">
          <img className='card-img-top down' src={this.state.marcas[1]} alt='marca2'/>
        </div>
        </div>
        <Link to={{
          pathname:"/PromocionDetail/"+this.props.data.id,
        }}  className="btn3" data={this.props.data}><FormattedMessage id="MoreDetails"/></Link>
      </div>
    );
  }
}
export default Promocion;
