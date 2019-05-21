import React, {Component} from 'react'
import Marca  from './Marca'
import axios from 'axios'
import Masonry from 'react-masonry-component';
import '../css/productoList-style.css';

class MarcaList extends Component{
  constructor(props){
    super(props);
    this.state={
      pagina: 0,
      marcas:[]
    
    };
  }


 

  componentDidMount() {
        axios.get('https://regalayapp1.herokuapp.com/marcas')
            .then((response) => {
                var state = this.state;
                var marcas = response.data;
                state.marcas=marcas;
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
          {this.state.marcas.map( (marc)=> <Marca key={marc.id} data={marc} />)}
      

        </div>
      </div>
      </Masonry>
    )
  }
}
export default MarcaList;
