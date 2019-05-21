import React, { Component } from 'react';

import '../css/destinoStyle.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {FormattedMessage} from "react-intl";

class ProductoDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      src:"",
      ciudad:"",
      direccion:"",      
      email:"",
      fisica:"" 
    };
  }

  componentDidMount() {    
        var id=this.props.match.params.idDestino;    
            axios.get('https://regalayapp1.herokuapp.com/destino/'+id)
                .then((response) => {
                    var state = this.state;
                    var destino = response.data;
                    state.id = id;
                    state.src = destino.src;
                    state.direccion = destino.direccion;                    
                    state.ciudad = destino.ciudad;
                    state.email = destino.email;
                    state.fisica = destino.fisica;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }

    postDestino=()=>{
      let direccion=document.getElementById('direccionPost').value;
      let ciudad=document.getElementById('ciudadPost').value;
      let email=document.getElementById('emailPost').value;
      let img=document.getElementById('urlPost').value;
      let fisica=document.getElementById('fisicaPost').value;

      let destino={
        src:img,        
        ciudad:ciudad,
        direccion:direccion,
        email:email,
        fisica:fisica
      }
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.post('https://regalayapp1.herokuapp.com/destino', destino);
      return false;
    }

    putDestino=()=>{
      let direccion=document.getElementById('direccionPut').value;
      if(direccion===""){
        direccion=this.state.direccion;
      }
      let ciudad=document.getElementById('ciudadPut').value;
      if(ciudad===""){
        ciudad=this.state.ciudad;
      }
      let email=document.getElementById('emailPut').value;
      if(email===""){
        email=this.state.email;
      }
      let img=document.getElementById('urlPut').value;
      if(img===""){
        img=this.state.src;
      }
      let fisica=document.getElementById('fisicaPut').value;
      if(fisica===""){
        fisica=this.state.fisica;
      }
      let destino={
        src:img,        
        ciudad:ciudad,
        direccion:direccion,
        email:email,
        fisica:fisica
      }
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.put('https://regalayapp1.herokuapp.com/destino/'+this.state.id, destino);
    }

    deleteDestino=()=>{
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.delete('https://regalayapp1.herokuapp.com/destino/'+this.state.id);
      window.location.href = 'https://regalayapp1.herokuapp.com/DestinoList';
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
            <h1 className="card-title">{this.state.ciudad}</h1>
            <p className="card-text text-secondary"><FormattedMessage id="Direction"/>: {this.state.direccion}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Email"/>: {this.state.email}</p>
            <div className="container">
            <Link to={{
              pathname:"/DestinoList",
            }}  className="back"><FormattedMessage id="Back"/><span className="bg"></span></Link>
            <button type="button" className="del float-right" onClick={this.deleteDestino}><FormattedMessage id="Delete"/><span className="bg"></span></button>
            </div>
            </div>
        </div>
      </div>
      <div className="float-right">
        <h1><FormattedMessage id="CrearNuevo"/></h1>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              <label className="control-label col-sm-12" htmlFor="ciudadPost"><FormattedMessage id="City"/>:</label>
              <input type="text" className="form-control" id="ciudadPost" placeholder="Enter city"/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" htmlFor="urlPost"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlPost" placeholder="Enter url"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" htmlFor="direccionPost"><FormattedMessage id="Direction"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="direccionPost" placeholder="Enter direction"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" htmlFor="emailPost"><FormattedMessage id="Email"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="emailPost" placeholder="Enter email"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" htmlFor="fisicaPost"><FormattedMessage id="Physic"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="fisicaPost" placeholder="Enter yes or no"/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button className="create" onClick={this.postDestino}><FormattedMessage id="Create"/></button>
          </div>
        </div>
        </form>
      </div>
      <div className="float-left abc">
        <h1><FormattedMessage id="Modify"/> </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12" htmlFor="ciudadPut"><FormattedMessage id="City"/>:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="ciudadPut" placeholder={this.state.ciudad}/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" htmlFor="urlPut"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="urlPut" placeholder={this.state.src}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" htmlFor="direccionPut"><FormattedMessage id="Direction"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="direccionPut" placeholder={this.state.direccion}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" htmlFor="emailPut"><FormattedMessage id="Email"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  id="emailPut" placeholder={this.state.email}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" htmlFor="fisicaPut"><FormattedMessage id="Physic"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="fisicaPut"  placeholder={this.state.fisica}/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="back" onClick={this.putDestino}><FormattedMessage id="Modify"/></button>
          </div>
        </div>
        </form>
      </div>
      </div>
    );
  }
}
export default ProductoDetail;
