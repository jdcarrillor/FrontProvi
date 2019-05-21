import React, {Component} from 'react'
import Factura  from './Factura'
import axios from 'axios'
import Masonry from 'react-masonry-component';
import '../css/productoList-style.css';

class FacturaList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      facturas:[]
    };
  }

  componentDidMount() {
        axios.get('https://regalayapp1.herokuapp.com/factura')
            .then((response) => {
                var state = this.state;
                var facturas = response.data;
                state.facturas=facturas;
                state.pagina = 0;
                // pueden cambiar el tamaño de partion aca
                this.setState(state);
            });
    }

  render(){
    const imagesLoadedOptions = { background: '.my-bg-image-el' }
    return(
      <Masonry imagesLoadedOptions={imagesLoadedOptions}>
      <div className="container-fuid d-flex justify-content-center">
        <div className='row'>
          {this.state.facturas.map( (fact)=> <Factura key={fact.id} data={fact}/>)}
        </div>
      </div>
      </Masonry>
    )
  }
}
export default FacturaList;
