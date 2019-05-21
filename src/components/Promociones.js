import React, {Component} from 'react'
import Promocion  from './Promocion'
import axios from 'axios'
import Masonry from 'react-masonry-component';
import '../css/productoList-style.css';

class Promociones extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      promociones:[]
    };
  }

  componentDidMount() {
        axios.get('https://regalayapp1.herokuapp.com/promocion')
            .then((response) => {
                var state = this.state;
                var promociones = response.data;
                state.promociones=promociones;
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
          {this.state.promociones.map( (prod)=> <Promocion key={prod.id} data={prod}/>)}
        </div>
      </div>
      </Masonry>
    )
  }
}
export default Promociones;
