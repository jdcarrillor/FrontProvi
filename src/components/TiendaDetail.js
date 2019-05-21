import React, { Component } from 'react';

import '../css/producto-style.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {FormattedMessage} from "react-intl";
import styled from 'styled-components';

const Container = styled.div`
background-color: #444;
color:white;
position:absolute;
top:${props=>props.top}px;
z-index:999;
transition: top 0.5s ease;
margin-left: 1150px;

`;
class TiendaDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      nombre:"",
      productos:[],
      direccion:"",
      marcas:[],
      promociones:[],
      imagen:"",
      top:-100,
      msg:""
      
    };
  }

  componentDidMount() {
        var id=this.props.match.params.idTienda;
        
            axios.get('https://regalayapp1.herokuapp.com/tiendas/'+id)
                .then((response) => {
                    var state = this.state;
                    var tienda= response.data;
                    state.id = id;
                    state.nombre = tienda.nombre;
                    state.direccion = tienda.direccion;
                    state.imagen = tienda.imagen;
                    
                
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }
    postTienda=()=>{
      let nombre=document.getElementById('nombrePost').value;
      let direccion=document.getElementById('direccionPost').value;
    
      let img=document.getElementById('urlPost').value;
     
  
      let tienda={
        nombre:nombre,
        direccion:direccion,
        imagen:img
        
        
                
      }
      this.setState({top:1100, msg:"Se creo correctamente"});


   
     /* this.setState({top:-100});*/
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
     axios.post('https://regalayapp1.herokuapp.com/tiendas', tienda);
    
      
       this.props.setTimeout(this.reset, 500000);
        /*this.props.setTimeout(this.onPost2(tienda), 500000);*/
      
      
     
    

    }
    putTienda=()=>{
      let nombre=document.getElementById('nombrePut').value;
      if(nombre===""){
        nombre=this.state.nombre;
      }
      let direccion=document.getElementById('direccionPut').value;
      if(direccion===""){
        direccion=this.state.direccion;
      }
    
      let img=document.getElementById('urlPut').value;
      if(img===""){
        img=this.state.imagen;
      }
  
     
      let tienda={
        nombre:nombre,
        imagen:img,
        direccion:direccion,
      
      }
      this.setState({top:16});
      this.setState({top:1100, msg:"Se actualizo correctamente"});

      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }

      axios.put('https://regalayapp1.herokuapp.com/tiendas/'+this.state.id, tienda);

      this.props.setTimeout(this.onPost, 500000);
      
      console.log(this.state.id);
    }
    deleteTienda=()=>{
      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.delete('https://regalayapp1.herokuapp.com/tiendas/'+this.state.id);
      window.location.href = 'https://regalayapp1.herokuapp.com/TiendaList';
      this.setState({top:16});
      console.log(this.state.id);
    }

    reset=()=>{

      this.setState({top:-100, msg:""});
    }

  render(){
    return(
      <React.Fragment>
      <div className="container">

      <Container top={this.state.top}>{this.state.msg}</Container>
      <div className="float-left">
        <div className="card text-center eso">
          <div className="overflow">
            <img className='card-img-top' src={this.state.imagen} alt='Image 1'/>
          </div>

            <div className="card-body text-dark">
            <h1 className="card-title">{this.state.nombre}</h1>
            <p className="card-text text-secondary"><FormattedMessage id="Direction" />: {this.state.direccion}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Products" />: Camiseta Polo</p>
            <p className="card-text text-secondary"><FormattedMessage id="Products" />: Tenis Reebok</p>
            <p className="card-text text-secondary"><FormattedMessage id="Promotions" />: Madrugon Falabella</p>
            <p className="card-text text-secondary"><FormattedMessage id="Promotions" />: BlackFriday</p>
            
            <div className="container">
            <Link to={{
              pathname:"/TiendaList",
            }}  className="back"><FormattedMessage id="Back" /></Link>
            <button type="button" className="del float-right" onClick={this.deleteTienda}><FormattedMessage id="Delete" /></button>
            </div>
            </div>
        </div>
      </div>
      <div className="float-right">
        <h1><FormattedMessage id="Create" /> </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12" for="nombrePost"><FormattedMessage id="StoreName" />:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="nombrePost" placeholder={this.state.nombre} />
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlPost"><FormattedMessage id="Image" />:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="urlPost" placeholder="URL"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="direccionPost"><FormattedMessage id="Direction" />:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="direccionPost" placeholder=""/>
        </div>
        </div>
        
      
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button className="create" onClick={this.postTienda}><FormattedMessage id="Create" /></button>
          </div>
        </div>
        </form >
      </div>
      <div className="float-left abc">
        <h1><FormattedMessage id="Modify" /> </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12" for="nombrePut"><FormattedMessage id="StoreName" />:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="nombrePut" placeholder={this.state.nombre}/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlPut" ><FormattedMessage id="Image" />:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="urlPut" placeholder="URL"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="direccionPut"><FormattedMessage id="Direction" />:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="direccionPut" placeholder=""/>
        </div>
        </div>
        
       
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="back" onClick={this.putTienda}><FormattedMessage id ="Modify"/></button>
          </div>
        </div>
        </form >
      </div>
      </div>
      </React.Fragment>
    );
  }
}
export default TiendaDetail;
