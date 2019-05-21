import React, { Component } from 'react';
import {FormattedMessage} from "react-intl";
import {FormattedNumber} from 'react-intl';
import {FormattedDate} from 'react-intl';

import '../css/producto-style.css';

import {Link} from 'react-router-dom';
class Cupon extends Component{

  render(){   return(
      <div className="card text-center">
        <div className="overflow">
          <img className='card-img-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCk5eWvXs13e_7NnqtKtYikKS9jpX0nvRbfp0zAyYH13HmEq4TaQ" alt='Cupon'/>
        </div>
        <div className="card-body text-dark">
        <h1 className="card-title"><FormattedMessage id="Reference"/>: {this.props.data.id}</h1>

    


        <h1 className="card-title"><FormattedMessage id="Date"/>:     <FormattedDate
    value={new Date(this.props.data.fechaVencimiento)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  /></h1>
        <p className="card-text text-secondary"><FormattedMessage id="Price"/>: $<FormattedNumber value={this.props.data.valor}/></p>
        <Link to={{
          pathname:"/CuponDetail/"+this.props.data.id,
        }}  className="btn3" data={this.props.data}><FormattedMessage id="MoreDetails"/></Link>
        </div>
   </div>
    );
  }
  

}
export default Cupon;



