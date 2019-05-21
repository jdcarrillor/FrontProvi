import React, {Component} from 'react'
import Usuario  from './Usuario'
import axios from 'axios'
import {Route, Redirect} from 'react-router-dom'
import Masonry from 'react-masonry-component';
import decode from 'jwt-decode';

const imagesLoadedOptions = { background: '.my-bg-image-el' };
class UsuarioList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      usuarios:[]
    };
  }

  componentDidMount() {
      var token = localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1);
      var tok=localStorage.getItem('token');
      if (tok) {
          axios.defaults.headers.common['Authorization'] =
              'Bearer ' + token;
      }
        axios.get('https://regalayapp1.herokuapp.com/usuario')
            .then((response) => {
                var state = this.state;
                var usuarios = response.data;
                state.usuarios=usuarios;
                state.pagina = 0;
                // pueden cambiar el tamaño de partion aca
                this.setState(state);
            });
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

    loginCheck(){
        return(
            <Route render = {props => (
                this.checkAuth() ? (
                    // Falta pasarle los props para que sepa cual usuario es por el id y que nombre tiene
                    this.ahoraRenderPag()
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
                )
            )} />
        );
    }


    ahoraRenderPag(){

        return(
            <Masonry imagesLoadedOptions={imagesLoadedOptions}>
                <div className="container-fuid d-flex justify-content-center">
                    <div className='row'>
                        {this.state.usuarios.map( (usu)=> <Usuario key={usu.id} data={usu}/>)}
                    </div>
                </div>
            </Masonry>
        );
    }

  render(){

    return(
        <div>
            {this.loginCheck()}
        </div>
    )
  }
}
export default UsuarioList;
