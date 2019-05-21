import React, {Component} from 'react'
import Tienda  from './Tienda'
import axios from 'axios'
import Masonry from 'react-masonry-component';
import '../css/productoList-style.css';

class TiendaList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      tiendas:[]
    };
  }

  componentDidMount() {
        axios.get('https://regalayapp1.herokuapp.com/tiendas')
            .then((response) => {
                var state = this.state;
                var tiendas = response.data;
                state.tiendas=tiendas;
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
          {this.state.tiendas.map( (tien)=> <Tienda key={tien.id} data={tien}/>)}
        </div>
      </div>
      </Masonry>
    )
  }
}
export default TiendaList;
