import React, { Component } from 'react';
import '../css/producto-styleMs.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {FormattedMessage} from "react-intl";

class UsuarioDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      src:"",
      nombre:"",
      email:[],
      username:"",
      password:"",
      compras:[],
      facturas:[]
    };
  }

  componentDidMount() {
        var id=this.props.match.params.idUsuario;
            axios.get('https://regalayapp1.herokuapp.com/usuario/'+id)
                .then((response) => {
                    var state = this.state;
                    var usuario = response.data;
                    state.id = id;
                    state.src = usuario.src;
                    state.nombre = usuario.nombre;
                    state.compras.push(usuario.compras);
                    state.facturas.push(usuario.facturas);
                    state.email = usuario.email;
                    state.username = usuario.username;
                    state.password = usuario.password;

                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }

    postUsuario=()=>{
      let src=document.getElementById('urlPost').value;
      let nombre=document.getElementById('nombrePost').value;
      let email=document.getElementById('emailPost').value;
      let username=document.getElementById('usernamePost').value;
      let password=document.getElementById('passwordPost').value;
      let compras=[];
      let compras1=document.getElementById('compras1Post').value;
      let compras1json={
        cantidad:compras1
      }
      compras.push(compras1json);

      let compras2=document.getElementById('compras2Post').value;
      let compras2json={
        cantidad:compras2
      }
      compras.push(compras2json);

      let facturas=[];
      let facturas1=document.getElementById('facturas1Post').value;
      let facturas1json={
        idFactura:facturas1
      }
      facturas.push(facturas1json);

      let facturas2=document.getElementById('facturas2Post').value;
      let facturas2json={
        idFactura:facturas2
      }
      facturas.push(facturas2json);
      
      let usuario={
        src:src,
        nombre:nombre,
        email:email,
        username:username,
        password:password,
        compras:compras,
        facturas:facturas
      }

      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }      axios.post('https://regalayapp1.herokuapp.com/usuario', usuario);
      return false;
    }

    putUsuario=()=>{
      let src=document.getElementById('urlPut').value;
      let compras=[];
      let facturas=[];

      if(src===""){
        src=this.state.src;
      }
      
      let nombre=document.getElementById('nombrePut').value;
      if(nombre===""){
        nombre=this.state.nombre;
      }
      let email=document.getElementById('emailPut').value;
      if(email===""){
        email=this.state.email;
      }
      let username=document.getElementById('usernamePut').value;
      if(username===""){
        username=this.state.username;
      }
      let password=document.getElementById('passwordPut').value;
      if(password===""){
        password=this.state.password;
      }

      let compras1=document.getElementById('compras1Put').value;
      if(compras1===""){
        compras1=this.state.compras[0];
      }
      let compras1json={
        cantidad:compras1
      }
      compras.push(compras1json);

      let compras2=document.getElementById('compras2Put').value;
      if(compras2===""){
        compras2=this.state.compras[1];
      }
      let compras2json={
        cantidad:compras2
      }
      compras.push(compras2json);

      let facturas1=document.getElementById('facturas1Put').value;
      if(facturas1===""){
        facturas1=this.state.facturas[0];
      }
      let facturas1json={
        idFactura:facturas1
      }
      facturas.push(facturas1json);

      let facturas2=document.getElementById('facturas2Put').value;
      if(facturas2===""){
        facturas2=this.state.facturas[1];
      }
      let facturas2json={
        idFactura:facturas2
      }
      facturas.push(facturas2json);

      let usuario={
        src:src,
        nombre:nombre,
        email:email,
        username:username,
        password:password,
        compras:[],
        facturas:[]
      }
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.put('https://regalayapp1.herokuapp.com/usuario/'+this.state.id, usuario);
    }

    deleteUsuario=()=>{
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.delete('https://regalayapp1.herokuapp.com/usuario/'+this.state.id);
      window.location.href = 'https://regalayapp1.herokuapp.com/UsuarioList';
    }

  render(){
    return(
      <div className="container">
      <div className="float-left">
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src={this.state.src} alt='user'/>
        </div>
        <div className="card-body text-dark">
        <h2 className="card-title">{this.state.nombre}</h2>
        <p className="card-text text-secondary"><FormattedMessage id="User"/>: {this.state.username}</p>
        <p className="card-text text-secondary"><FormattedMessage id="Email"/>: {this.state.email}</p>
        <div className="container">
        <Link to={{
              pathname:"/UsuarioList",
            }}  className="back"><FormattedMessage id="Back"/><span className="bg"></span></Link>
        <button type="button" className="del float-right" onClick={this.deleteUsuario}><FormattedMessage id="Delete"/><span className="bg"></span></button>
        </div>
        </div>
      </div>
      </div>
      <div className="float-right">
        <h1><FormattedMessage id="CrearNuevo"/></h1>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-10">
              <label className="control-label col-sm-12" for="nombrePost"><FormattedMessage id="UName"/>:</label>           
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
          <label className="control-label col-sm-12" for="emailPost"><FormattedMessage id="Email"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="emailPost" placeholder="Enter e-mail"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="usernamePost"><FormattedMessage id="User"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="usernamePost" placeholder="Enter user name"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="passwordPost"><FormattedMessage id="Password"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="passwordPost" placeholder="Enter password"/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
          <button className="create" onClick={this.postUsuario}><FormattedMessage id="Create"/></button>
          </div>
        </div>
        </form>
      </div>
      <div className="float-left abc">
        <h1><FormattedMessage id="Modify"/></h1>
        <form className="form-horizontal">
        <div className="form-group">
            <label className="control-label col-sm-12" for="nombrePut"><FormattedMessage id="UName"/>:</label>
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
          <label className="control-label col-sm-12" for="emailPut"><FormattedMessage id="Email"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="emailPut" placeholder={this.state.email}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="usernamePut"><FormattedMessage id="User"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="usernamePut" placeholder={this.state.username}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="passwordPut"><FormattedMessage id="Password"/>:</label>
        <div className="col-sm-10">
          <input type="url" className="form-control" id="passwordPut" placeholder={this.state.password}/>
        </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="back" onClick={this.putUsuario}><FormattedMessage id="Modify"/></button>
          </div>
        </div>
        </form>
      </div>
      </div>
    );
  }
}
export default UsuarioDetail;
