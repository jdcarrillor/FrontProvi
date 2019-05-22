import React, { Component } from 'react';

import '../css/producto-styleMs.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {FormattedMessage} from "react-intl";
import {FormattedNumber} from 'react-intl';
import {FormattedDate} from 'react-intl';

class CuponDetail extends Component{

  constructor(props){
    super(props);
    this.state={
      id:0,
      pagina: 0,
      idMarca:0,
      idTienda:0,
      valor:0,
      fechaVencimiento:"",
      top:-100,
      msg:""
     
    };
  }

  componentDidMount() {
        const id=this.props.match.params.idCupon;
        console.log(id);
            axios.get('https://regalayapp1.herokuapp.com/cupones/'+id)
                .then((response) => {
                    var state = this.state;
                    var cupon = response.data;
                    state.idMarca = cupon.idMarca;
                    //state.productos = tienda.productos;
                    state.idTienda = cupon.idTienda;
                    state.id=id
                    //tiendas
                    //promociones
                    
                    
                    state.valor = cupon.valor;
                    state.fechaVencimiento = cupon.fechaVencimiento;
                    
                    state.pagina = 0;
                    // pueden cambiar el tamaño de partion aca
                    this.setState(state);
                });
    }

       postCupon=()=>{
      let idMarca=document.getElementById('idMarcaPost').value;
      let idTienda=document.getElementById('idTiendaPost').value;
      let valor=document.getElementById('valorPost').value;
      let fechaVencimiento=document.getElementById('fechaVencimientoPost').value;
     
      let cupon={
        idMarca:idMarca,
        idTienda:idTienda,
        valor:valor,
        fechaVencimiento:fechaVencimiento
        
        
      }
      this.setState({top:1100, msg:"Se creo correctamente"});
         var tok=localStorage.getItem('token');
         if (tok) {
           var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
           axios.defaults.headers.common['Authorization'] =
               'Bearer ' + token;
         }
      axios.post('https://regalayapp1.herokuapp.com/cupones', cupon);
      this.props.setTimeout(this.reset, 500000);
    }

      putCupon=()=>{
      let idMarca=document.getElementById('idMarcaPut').value;
      if(idMarca===0){
        idMarca=this.state.idMarca;
      }
      let idTienda=document.getElementById('idTiendaPut').value;
      if(idTienda===0){
        idTienda=this.state.idTienda;
      }
      let valor=document.getElementById('valorPut').value;
      if(valor===0){
        valor=this.state.valor;
      }

       let fechaVencimiento=document.getElementById('fechaVencimientoPut').value;
      if(fechaVencimiento===""){
        fechaVencimiento=this.state.fechaVencimiento;
      }
      
      let cupon={
        idMarca:idMarca,
        idTienda:idTienda,
        valor:valor,
        fechaVencimiento:fechaVencimiento
        
      }
      this.setState({top:1100, msg:"Se creo actualizo"});

        var tok=localStorage.getItem('token');
        if (tok) {
          var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
          axios.defaults.headers.common['Authorization'] =
              'Bearer ' + token;
        }
      axios.put('https://regalayapp1.herokuapp.com/cupones/'+this.state.id, cupon);
      window.location.href = 'https://regalayapp1.herokuapp.com/CuponList';
      console.log(this.state.id);
      console.log("aaaaaaaaa");
    }
    deleteCupon=()=>{


      var tok=localStorage.getItem('token');
      if (tok) {
        var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
        axios.defaults.headers.common['Authorization'] =
            'Bearer ' + token;
      }
      axios.delete('https://regalayapp1.herokuapp.com/cupones/'+this.state.id);
      window.location.href = 'https://regalayapp1.herokuapp.com/CuponList';
      this.props.setTimeout(this.reset, 500000);
    }
     reset=()=>{

      this.setState({top:-100, msg:""});
    }

  render(){
    return(
      <div>
      <div className="float-left">
        <div className="card text-center eso">
          <div className="overflow">
            <img className='card-img-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCk5eWvXs13e_7NnqtKtYikKS9jpX0nvRbfp0zAyYH13HmEq4TaQ" alt='Image1'/>
          </div>
            <div className="card-body text-dark">
            <h1 className="card-title"><FormattedMessage id="Reference"/>: {this.props.match.params.idCupon}</h1>
            <p className="card-text text-secondary"><FormattedMessage id="Brand"/>: {this.state.idMarca}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Store"/>: {this.state.idTienda}</p>
            <p className="card-text text-secondary"><FormattedMessage id="Price"/>: $<FormattedNumber value={this.state.valor}/></p>
            <p className="card-text text-secondary"><FormattedMessage id="Date"/>: <FormattedDate
    value={new Date(this.state.fechaVencimiento)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  /></p>
           
            <Link to={{
              pathname:"/CuponList",
            }}  className="back"><FormattedMessage id="Back"/></Link>
            <button type="button" className="del float-right" onClick={this.deleteCupon}><FormattedMessage id="Delete"/></button>

            </div>
        </div>
      </div>
      <div class="row">
      <div class="col-4">
      <div className="float-right">
        <h1><FormattedMessage id="Create"/> </h1>
        <form class="form-horizontal" action="/action_page.php">
          <div class="form-group">
            <label class="control-label col-sm-12" for="idMarcaPost"><FormattedMessage id="IdBrand"/>:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="idMarcaPost" placeholder="ID"/>
            </div>
          </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="idTiendaPost" ><FormattedMessage id="IdStore"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="idTiendaPost" placeholder="ID"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="valorPost"><FormattedMessage id="Value"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="valorPost" placeholder="$"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="fechaVencimientoPost"><FormattedMessage id="Date2"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="fechaVencimientoPost" placeholder="AAAA-MM-DD"/>
        </div>
        </div>
       
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
              <button class="create" onClick={this.postCupon}><FormattedMessage id="Create"/></button>
          </div>
        </div>
        </form>
        </div>
      </div>
      <div class="col-5">
      <div className="float-left abc">
        <h1><FormattedMessage id="Modify"/> </h1>
        <form class="form-horizontal" action="/action_page.php">
          <div class="form-group">
            <label class="control-label col-sm-12" for="idMarcaPut" ><FormattedMessage id="IdBrand"/>:</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="idMarcaPut" placeholder="ID"/>
            </div>
          </div>
        
        <div class="form-group">
          <label class="control-label col-sm-12" for="idTiendaPut" ><FormattedMessage id="IdStore"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="idTiendaPut" placeholder="ID"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="valorPut" ><FormattedMessage id="Value"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="valorPut" placeholder="$"/>
        </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-12" for="fechaVencimientoPut" ><FormattedMessage id="Date2"/>:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="fechaVencimientoPut" placeholder="AAAA-MM-DD"/>
        </div>
        </div>
        
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="back" onClick={this.putCupon}><FormattedMessage id="Modify"/></button>
          </div>
        </div>
        </form>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default CuponDetail;
