import React, { Component } from 'react';

import '../css/producto-styleMs.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {FormattedMessage} from "react-intl";
import decode from "jwt-decode";


class ProductoDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      nombre:"",
      src:"",
      clasificacion:"",
      talla:"",
      precio:0,
      cant:0
    };
  }

  checkAuth(){
    const token = localStorage.getItem('token');
    if(!token){
      return false;
    }
    try{
      const  tok = decode(token);
      if(!tok){
        return false;
      }
    }catch(e){

      return false;
    }
    return true;
  }

  componentDidMount() {
        var id=this.props.match.params.idProducto;
            axios.get('https://regalayapp1.herokuapp.com/producto/'+id)
                .then((response) => {
                    var state = this.state;
                    var producto = response.data;
                    state.id = id;
                    state.nombre = producto.nombre;
                    state.src = producto.src;
                    state.clasificacion = producto.clasificacion;
                    state.talla = producto.talla;
                    state.precio = producto.precio;
                    state.cant = producto.cantidadDisponible;
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }
    postProducto=()=>{
      let nombre=document.getElementById('nombrePost').value;
      let clas=document.getElementById('clasificacionPost').value;
      let talla=document.getElementById('tallaPost').value;
      let img=document.getElementById('urlPost').value;
      let luk=document.getElementById('precioPost').value;
      let cant=document.getElementById('cantidadPost').value;
      let producto={
        nombre:nombre,
        src:img,
        clasificacion:clas,
        talla:talla,
        precio:luk,
        cantidadDisponible:cant
      }
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.post('https://regalayapp1.herokuapp.com/producto', producto);
      return false;
    }
    putProducto=()=>{
      let nombre=document.getElementById('nombrePut').value;
      if(nombre===""){
        nombre=this.state.nombre;
      }
      let clas=document.getElementById('clasificacionPut').value;
      if(clas===""){
        clas=this.state.clasificacion;
      }
      let talla=document.getElementById('tallaPut').value;
      if(talla===""){
        talla=this.state.talla;
      }
      let img=document.getElementById('urlPut').value;
      if(img===""){
        img=this.state.src;
      }
      let luk=document.getElementById('precioPut').value;
      if(luk===""){
        luk=this.state.precio;
      }
      let cant=document.getElementById('cantidadPut').value;
      if(cant===0){
        cant=this.state.cant;
      }
      let producto={
        nombre:nombre,
        src:img,
        clasificacion:clas,
        talla:talla,
        precio:luk,
        cantidadDisponible:cant
      }

      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.put('https://regalayapp1.herokuapp.com/producto/'+this.state.id, producto);
      console.log(this.state.id);
    }
    deleteProducto=()=>{
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.delete('https://regalayapp1.herokuapp.com/producto/'+this.state.id);
      window.location.href = 'https://regalayapp1.herokuapp.com/ProductoList';
    }
  render(){
    return(
      <div className="container">
      <div className="float-left">
        <div className="card text-center eso">
          <div className="overflow">
            <img className='card-img-top' src={this.state.src} alt='Image 1'/>
          </div>
            <div className="card-body text-dark">
            <h1 className="card-title">{this.state.nombre}</h1>
            <p className="card-text text-secondary"><FormattedMessage id="Size"/>: {this.state.talla}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Price"/>: ${this.state.precio}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Stock"/>: {this.state.cant}</p>
            <div className="container">
            <Link to={{
              pathname:"/ProductoList",
            }}  className="back"><FormattedMessage id="Back"/><span className="bg"></span></Link>
            <button type="button" className="del float-right" onClick={this.deleteProducto}><FormattedMessage id="Delete"/><span className="bg"></span></button>
            </div>
            </div>
        </div>
      </div>
      <div className="float-right">
        <h1><FormattedMessage id="CrearNuevo"/></h1>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              <label className="control-label col-sm-12" for="nombrePost"><FormattedMessage id="PName"/>:</label>
              <input type="text" className="form-control" id="nombrePost" placeholder="Enter name"/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlPost"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlPost" placeholder="Enter url"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="clasificacionPost"><FormattedMessage id="Class"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="clasificacionPost" placeholder="Enter tags"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="tallaPost"><FormattedMessage id="Size"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="tallaPost" placeholder="Enter size"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="precioPost"><FormattedMessage id="Price"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="precioPost" placeholder="Enter value in COP"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="cantidadPost"><FormattedMessage id="AvailableQ"/>:</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="cantidadPost" placeholder="Enter stock"/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button className="create" onClick={this.postProducto}><FormattedMessage id="Create"/></button>
          </div>
        </div>
        </form>
      </div>
      <div className="float-left abc">
        <h1><FormattedMessage id="Modify"/> </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12" for="nombrePut"><FormattedMessage id="PName"/>:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="nombrePut" placeholder={this.state.nombre}/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlPut"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlPut" placeholder={this.state.src}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="clasificacionPut"><FormattedMessage id="Class"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="clasificacionPut" placeholder={this.state.clasificacion}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="tallaPut"><FormattedMessage id="Size"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  id="tallaPut" placeholder={this.state.talla}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="precioPut"><FormattedMessage id="Price"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="precioPut"  placeholder={this.state.precio}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="cantidadPut"><FormattedMessage id="AvailableQ"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="cantidadPut" placeholder={this.state.cant}/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="back" onClick={this.putProducto } hidden={!this.checkAuth()}><FormattedMessage id="Modify"/></button>
          </div>
        </div>
        </form>
      </div>
      </div>
    );
  }
}
export default ProductoDetail;
