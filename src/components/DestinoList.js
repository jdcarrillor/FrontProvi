import React, {Component} from 'react'
import Destino  from './Destino'
import axios from 'axios'
import Masonry from 'react-masonry-component';
import '../css/productoList-style.css';

class DestinoList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      destinos:[]
    };
  }

  componentDidMount() {
        axios.get('https://regalayapp1.herokuapp.com/destino')
            .then((response) => {
                var state = this.state;
                var destinos = response.data;
                state.destinos=destinos;
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
          {this.state.destinos.map( (dest)=> <Destino key={dest.id} data={dest}/>)}
        </div>
      </div>
      </Masonry>
    )
  }
}
export default DestinoList;
