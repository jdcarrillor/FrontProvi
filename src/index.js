import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {IntlProvider, addLocaleData} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import localeEnMessages from "./locales/en";


import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from "./locales/es";



let state ={};
window.setState=(changes)=>{
    state=Object.assign({}, this.state, changes);

}

let initalState={

};

const funleng = function(){

    if(navigator.language.startsWith("en")){
        return localeEnMessages;

    }

    else{
        return localeEsMessages;
    }

}

addLocaleData([...esLocaleData, ...enLocaleData])



ReactDOM.render(
	<IntlProvider locale={navigator.language} messages = {funleng()}>
        <App/>
    </IntlProvider>, document.getElementById("root")


	 );




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
