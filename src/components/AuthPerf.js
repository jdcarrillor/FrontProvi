import React, { Component } from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';
import decode from 'jwt-decode';
import UsuarioList from './UsuarioList';


class AuthPerf extends Component {

    constructor(props){
        super(props);
        this.state={
            hola:""
        }
        this.checkAuth = this.checkAuth.bind(this);
    }
    //Esto hace el check de que existe un token y no es cualquier texto random
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


    recargar(){

        window.location.reload();
    }
    render() {
        return(
            <Route render = {props => (
                this.checkAuth() ? (
                    // Falta pasarle los props para que sepa cual usuario es por el id y que nombre tiene
                    <UsuarioList {...this.props}/>
                ) : (
                    <Redirect  to={{
                        pathname: '/login',
                        state: { from: props.location }

                    }}  />
                )
            )} />
        );
    }
}

export default AuthPerf;

