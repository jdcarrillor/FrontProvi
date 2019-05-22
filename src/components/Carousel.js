import React, {Component} from 'react';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/bootstrap.min.css';
import '../css/magnific-popup.css';
import '../css/jquery-ui.css';
import '../css/style.css';
import '../css/aos.css';
import '../css/bootstrap-datepicker.css';

import {FormattedMessage} from "react-intl";

class CarouselClass extends Component{

  render(){
    return(
      <div>
      <div className="slide-one-item home-slider owl-carousel owl-loaded owl-drag">

      <div className="owl-stage-outer">
        <div className="owl-stage" style={{transform: "translate3d(0px, 0px,0px)", transition: "all 0.25s ease 0s", width: "100%"}}>

          <div className="owl-item cloned" style={{width:"100%"}}>
            <div className="site-blocks-cover overlay aos-init aos-animate" style={{backgroundImage: "url("+"https://redeclectica.files.wordpress.com/2014/12/picture-of-gifts.jpg"+")", height: "100%", width:"100%"}} data-aos="fade" data-stellar-background-ratio="0.5">
              <div className="container">
                <div className="row align-items-center justify-content-center text-center">

                  <div className="col-md-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">

                    <h1 className="font-weight-light" style={{color:"#E6E6E6"}} ><b><FormattedMessage id="Moments"/></b></h1>
                    <p className="mb-5" style={{color:"#FFFFFF"}}><FormattedMessage id="MoMessage"/></p>
                    <p><a href="ProductoList" style= {{backgroundColor: "#DD133F"}} className="btn3 btn-primary py-3 px-5 text-white"><FormattedMessage id="Site"/></a></p>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    </div>
    );
  }
}

export default CarouselClass;
