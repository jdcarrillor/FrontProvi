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
class MarcaDetail extends Component{
  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      nombre:"",
      imagen:"",
      origen:"",
      clasificacion:"",
      descripcion:"",
      productos:[],
      top:-100,
      
      msg:""
    };
  }

  componentDidMount() {
        var id=this.props.match.params.idMarca;
            axios.get('http://localhost:3001/marcas/'+id)
                .then((response) => {
                    var state = this.state;
                    var marca = response.data;
                    state.id = id;
                    state.nombre = marca.nombre;
                    state.imagen = marca.imagen;
                    state.clasificacion = marca.clasificacion;
                    state.origen = marca.origen;
                    state.descripcion = marca.descripcion;
                
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });

  /*  var s= this.state;
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
    }*/
    }
    postMarca=()=>{
      let nombre=document.getElementById('nombrePost').value;
      let clas=document.getElementById('clasificacionPost').value;
      let origen=document.getElementById('origenPost').value;
      let img=document.getElementById('urlPost').value;
      let des=document.getElementById('descripcionPost').value;
  
      let marca={
        nombre:nombre,
        imagen:img,
        clasificacion:clas,
        descripcion:des,
        origen:origen
        
      }
       this.setState({top:1100, msg:"Se creo correctamente"});
      axios.post('http://localhost:3001/marcas', marca);
      this.props.setTimeout(this.reset, 500000);
  /*    this.props.history.push('/MarcaList');
      window.location.reload();*/
      
    
    }
    putMarca=()=>{
      let nombre=document.getElementById('nombrePut').value;
      if(nombre===""){
        nombre=this.state.nombre;
      }
      let clas=document.getElementById('clasificacionPut').value;
      if(clas===""){
        clas=this.state.clasificacion;
      }
      let origen=document.getElementById('origenPut').value;
      if(origen===""){
        origen=this.state.origen;
      }
      let img=document.getElementById('urlPut').value;
      if(img===""){
        img=this.state.imagen;
      }
      let des=document.getElementById('descripcionPut').value;
      if(des===""){
        des=this.state.descripcion;
      }
     
      let marca={
        nombre:nombre,
        imagen:img,
        clasificacion:clas,
        descripcion:des,
        origen:origen
      }
      this.setState({top:1100, msg:"Se creo correctamente"});
      axios.put('http://localhost:3001/marcas/'+this.state.id, marca);
      this.props.setTimeout(this.reset, 500000);
      console.log(this.state.id);
    }
    deleteMarca=()=>{
      axios.delete('http://localhost:3001/marcas/'+this.state.id);
      window.location.href = 'http://localhost:3000/MarcaList';
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
            <img className='card-img-top' src={this.state.imagen} alt='Image1'/>
          </div>
            <div className="card-body text-dark">
            <h1 className="card-title">{this.state.nombre}</h1>
            <p className="card-text text-secondary"><FormattedMessage id="Category"/>: {this.state.clasificacion}</p>
            <p className="card-text text-secondary"><FormattedMessage id="From"/>: {this.state.origen}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Description"/>: {this.state.descripcion}</p>
            <div className="container">
            <Link to={{
              pathname:"/MarcaList",
            }}  className="back"><FormattedMessage id="Back"/></Link>
            <button type="button" className="del float-right" onClick={this.deleteMarca}><FormattedMessage id="Delete"/></button>
            </div>
            </div>
        </div>
      </div>
      <div className="float-right">
        <h1><FormattedMessage id="Create"/> </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12" for="nombrePost"><FormattedMessage id="BrandName"/>:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="nombrePost" placeholder={this.state.nombre}/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlPost"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="urlPost" placeholder="URL"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="clasificacionPost"><FormattedMessage id="Category"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="clasificacionPost" placeholder={this.state.clasificacion}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="origenPost" ><FormattedMessage id="From"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="origenPost" placeholder= {this.state.origen}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="descripcionPost" ><FormattedMessage id="About"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="descripcionPost" placeholder="Info"/>
        </div>
        </div>
      
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
              <button className="create" onClick={this.postMarca}><FormattedMessage id="Create"/></button>
          </div>
        </div>
        </form>
      </div>
      <div className="float-left abc">
        <h1><FormattedMessage id="Modify"/> </h1>
        <form className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-sm-12" for="nombrePut"><FormattedMessage id="BrandName"/>:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="nombrePut" placeholder={this.state.nombre}/>
            </div>
          </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="urlPut"><FormattedMessage id="Image"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="urlPut" placeholder="URL"/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="clasificacionPut" ><FormattedMessage id="Category"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="clasificacionPut" placeholder={this.state.clasificacion}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12"for="origenPut"><FormattedMessage id="From"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control"  id="origenPut" placeholder={this.state.origen}/>
        </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-12" for="descripcionPut"><FormattedMessage id="About"/>:</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="descripcionPut"  placeholder="info"/>
        </div>
        </div>
    
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="back" onClick={this.putMarca}><FormattedMessage id="Modify"/></button>
          </div>
        </div>
        </form>
      </div>
      </div>
      </React.Fragment>
    );
  }
}
export default MarcaDetail;
