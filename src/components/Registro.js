import React from 'react';
import axios from 'axios';
import '../css/producto-styleMs.css';
import {FormattedMessage} from 'react-intl';

export default class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            exito:false
        }

        console.log('el token actual es:'+ localStorage.getItem("token"));
    }

    postUsuario=()=>{
      let src=document.getElementById('urlPost').value;
      let nombre=document.getElementById('nombrePost').value;
      let email=document.getElementById('emailPost').value;
      let username=document.getElementById('usernamePost').value;
      let password=document.getElementById('passwordPost').value;

      let usuario={
        src:src,
        nombre:nombre,
        email:email,
        username:username,
        password:password
      }

      let didit=false;

      axios.post('https://regalayapp1.herokuapp.com/usuario', usuario).then((response)=>{
            let bool=(response.status===200);
            if(bool){
                alert("Cuenta creada exitosamente");
                didit=true;
            }}).then(en=>{
                if(!didit){
                    alert("Correo o nombre de usuario ya en uso");
                }
                window.location.reload();
            });;
      return false;
    }

    render() {
        return (
            <div>
                <form>
                <div className="float-right">
                  <h1><FormattedMessage id="Register"/></h1>
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
                    <input type="text" className="form-control" id="usernamePost" placeholder="Enter user name"/>
                  </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-12" for="passwordPost"><FormattedMessage id="Password"/>:</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="passwordPost" placeholder="Enter password"/>
                  </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button className="create" onClick={this.postUsuario}><FormattedMessage id="Register"/></button>
                    </div>
                  </div>
                  </form>
                </div>
                </form>
            </div>
        )
    }
}
