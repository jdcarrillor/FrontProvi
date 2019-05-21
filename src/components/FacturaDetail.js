import React, { Component } from 'react';

import '../css/destinoStyle.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {FormattedMessage} from "react-intl";

class FacturaDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      src:"",
      valorCompra:"",
      formaDePago:"",      
      fechaCompra:"",
      destino:"",
      tienda:"",
      tarjetaRegalo:"",
      srcTarjeta:""
    };
  }

  componentDidMount() {    
        var id=this.props.match.params.idFactura;    
            axios.get('https://regalayapp1.herokuapp.com/factura/'+id)
                .then((response) => {
                    var state = this.state;
                    var factura = response.data;
                    state.id = id;
                    state.src = factura.src;
                    state.valorCompra = factura.valorCompra;                    
                    state.formaDePago = factura.formaDePago;
                    state.fechaCompra = factura.fechaCompra;
                    state.destino = factura.destino;
                    state.tienda = factura.tienda;
                    state.tarjetaRegalo = factura.tarjetaRegalo;
                    state.srcTarjeta = factura.srcTarjeta;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }

    postFactura=()=>{
      let src=document.getElementById('urlPost').value;
      let valorCompra=document.getElementById('valorCPost').value;
      let formaDePago=document.getElementById('formaPPost').value;
      let fechaCompra=document.getElementById('fechaCPost').value;
      let destino=document.getElementById('destinoPost').value;
      let tienda=document.getElementById('tiendaPost').value;
      let tarjetaRegalo=document.getElementById('tarjetaRPost').value;
      let srcTarjeta=document.getElementById('urlTPost').value;

      let factura={
        src:src,
        valorCompra:valorCompra,
        formaDePago:formaDePago,      
        fechaCompra:fechaCompra,
        destino:destino,
        tienda:tienda,
        tarjetaRegalo:tarjetaRegalo,
        srcTarjeta:srcTarjeta
      }
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.post('https://regalayapp1.herokuapp.com/factura', factura);
      return false;
    }

    putFactura=()=>{
      let src=document.getElementById('urlPut').value;
      if(src===""){
        src=this.state.src;
      }
      let valorCompra=document.getElementById('valorCPut').value;
      if(valorCompra===""){
        valorCompra=this.state.valorCompra;
      }
      let formaDePago=document.getElementById('formaPPut').value;
      if(formaDePago===""){
        formaDePago=this.state.formaDePago;
      }
      let fechaCompra=document.getElementById('fechaCPut').value;
      if(fechaCompra===""){
        fechaCompra=this.state.fechaCompra;
      }
      let destino=document.getElementById('destinoPut').value;
      if(destino===""){
        destino=this.state.destino;
      }
      let tienda=document.getElementById('tiendaPut').value;
      if(tienda===""){
        tienda=this.state.tienda;
      }
      let tarjetaRegalo=document.getElementById('tarjetaRPut').value;
      if(tarjetaRegalo===""){
        tarjetaRegalo=this.state.tarjetaRegalo;
      }
      let srcTarjeta=document.getElementById('urlTPut').value;
      if(srcTarjeta===""){
        srcTarjeta=this.state.srcTarjeta;
      }

      let factura={
        src:src,
        valorCompra:valorCompra,
        formaDePago:formaDePago,      
        fechaCompra:fechaCompra,
        destino:destino,
        tienda:tienda,
        tarjetaRegalo:tarjetaRegalo,
        srcTarjeta:srcTarjeta
      }
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.put('https://regalayapp1.herokuapp.com/factura/'+this.state.id, factura);
    }

    deleteFactura=()=>{
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.delete('https://regalayapp1.herokuapp.com/factura/'+this.state.id);
      window.location.href = 'https://regalayapp1.herokuapp.com/FacturaList';
    }

  render(){
    return(
      <div className="container">
      <div className="float-left">
        <div className="card text-center eso">
          <div className="overflow">
            <img className='card-img-top' src={this.state.src} alt='dest'/>
          </div>
            <div className="card-body text-dark">

            
            <p className="card-text text-secondary"><FormattedMessage id="Direction"/>: {this.state.valorCompra}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Email"/>: {this.state.formaDePago}</p>

            <h1 className="card-title">$COP {this.state.valorCompra}</h1>
            <p className="card-text text-secondary"><FormattedMessage id="Payment"/>: {this.state.formaDePago}}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Destination"/>: {this.state.destino}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Store"/>: {this.state.tienda}</p>
            <img className='card-img-top' src={this.state.srcTarjeta} alt='tarj'/>
            <p className="card-text text-secondary"><FormattedMessage id="GiftCard"/>: {this.state.tarjetaRegalo}</p>
            <div className="container">
            <Link to={{
              pathname:"/FacturaList",
            }}  className="back"><FormattedMessage id="Back"/><span className="bg"></span></Link>
            <button type="button" className="del float-right" onClick={this.deleteFactura}><FormattedMessage id="Delete"/><span className="bg"></span></button>
            </div>
            </div>
        </div>
      </div>
      <div className="float-right">
        <h1><FormattedMessage id="CrearNuevo"/></h1>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              <label className="control-label col-sm-12" for="valorCPost"><FormattedMessage id="Value"/>:</label>
              <input type="text" className="form-control" id="valorCPost" placeholder="Enter value"/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlPost"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlPost" placeholder="Enter url"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="formaPPost"><FormattedMessage id="Payment"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="formaPPost" placeholder="Enter payment"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="fechaCPost"><FormattedMessage id="PurchDate"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="fechaCPost" placeholder="Enter date"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="destinoPost"><FormattedMessage id="Destination"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="destinoPost" placeholder="Enter destination"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="tiendaPost"><FormattedMessage id="Store"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="tiendaPost" placeholder="Enter store"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlTPost"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlTPost" placeholder="Enter url"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="tarjetaRPost"><FormattedMessage id="GiftCard"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="tarjetaRPost" placeholder="Enter gift card"/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button className="create" onClick={this.postFactura}><FormattedMessage id="Create"/></button>
          </div>
        </div>
        </form>
      </div>
      <div className="float-left abc">
        <h1><FormattedMessage id="Modify"/> </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12" for="valorCPut"><FormattedMessage id="Value"/>:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="valorCPut" placeholder={this.state.valorCompra}/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlPut"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlPut" placeholder={this.state.src}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="formaPPut"><FormattedMessage id="Payment"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="formaPPut" placeholder={this.state.formaDePago}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="fechaCPut"><FormattedMessage id="PurchDate"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  id="fechaCPut" placeholder={this.state.fechaCompra}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="destinoPut"><FormattedMessage id="Destination"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="destinoPut"  placeholder={this.state.destino}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="tiendaPut"><FormattedMessage id="Store"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="tiendaPut"  placeholder={this.state.tienda}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlTPut"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlTPut" placeholder={this.state.srcTarjeta}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="tarjetaRPut"><FormattedMessage id="GiftCard"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="tarjetaRPut" placeholder={this.state.tarjetaRegalo}/>
        </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="back" onClick={this.putFactura}><FormattedMessage id="Modify"/></button>
          </div>
        </div>
        </form>
      </div>
      </div>
    );
  }
}
export default FacturaDetail;
