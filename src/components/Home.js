import React, {Component} from 'react';

import CarouselClass from './Carousel';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/bootstrap.min.css';
import '../css/magnific-popup.css';
import '../css/jquery-ui.css';
import '../css/style.css';
import '../css/aos.css';
import '../css/bootstrap-datepicker.css';
import Auth from './Auth.js';

import {FormattedMessage} from "react-intl";

class Home extends Component{

    componentDidMount() {
        const auth=new Auth();
        auth.handleAuthentication();
    }

    render(){
        return(
            <div data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">
                <div className="site-wrap">

                 <CarouselClass/>

                 <div className="site-section">
                    <div className="container">
                        <div className="row align-items-stretch">
                             <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/ProductoList" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="https://pngimage.net/wp-content/uploads/2018/06/icono-producto-png-7.png" alt="prod" width="100%" height="100%" /></a>
                                    <div>
                                        <h2><FormattedMessage id="Products"/></h2>
                                        <p><FormattedMessage id="ProductsMessage"/></p>
                                        <p><a className="btn2" style= {{ float:"none" ,textTransform:"lowercase"}} href="/ProductoList"><FormattedMessage id="Products"/><span className="bg"></span></a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/Promociones" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="https://images.vexels.com/media/users/3/145145/isolated/preview/d3d5c20be387365d9cc35c79b13365ac-tag-illustration-by-vexels.png" alt="prom" width="100%" height="100%" /></a>
                                    <div>
                                        <h2><FormattedMessage id="Promotions"/></h2>
                                        <p><FormattedMessage id="PromotionsMessage"/></p>
                                        <p><a className="btn2" style= {{ float:"none", textTransform:"lowercase"}} href="/Promociones"><FormattedMessage id="Promotions"/><span className="bg"></span></a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/TarjetaRegaloList" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="https://www.justdrums.com/wp-content/uploads/2018/12/giftcard_image1.png" alt="store" width="100%" height="100%" /></a>
                                    <div>
                                        <h2><FormattedMessage id="Cards"/></h2>
                                        <p><FormattedMessage id="CardsMessage"/></p>
                                        <p><a className="btn2" style= {{float:"none", textTransform:"lowercase"}} href="/TarjetaRegaloList"><FormattedMessage id="Cards"/><span className="bg"></span></a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <div>
                                        <h2><FormattedMessage id="Coupons"/></h2>
                                        <p><FormattedMessage id="CouponsMessage"/></p>
                                        <p><a className="btn2" style= {{float:"none", textTransform:"lowercase"}} href="/CuponList"><FormattedMessage id="Coupons"/><span className="bg"></span></a></p>
                                    </div>
                                    <a href="/CuponList" style= {{width:"100%", height:"100%", paddingTop:"15%"}}><img src="http://www.sheerid.com/wp-content/uploads/2013/11/coupon-envelope.png" alt="cupo" width="100%" height="100%" /></a>

                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <div>
                                        <h2><FormattedMessage id="Stores"/></h2>
                                        <p><FormattedMessage id="StoresMessage"/></p>
                                        <p><a className="btn2" style= {{float:"none", textTransform:"lowercase"}} href="/TiendaList"><FormattedMessage id="Stores"/><span className="bg"></span></a></p>
                                    </div>
                                    <a href="/TiendaList" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="http://chittagongit.com/download/175739" alt="Stores" width="100%" height="100%" /></a>

                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <div>
                                        <h2><FormattedMessage id="Brands"/></h2>
                                        <p><FormattedMessage id="BrandsMessage"/></p>
                                        <p><a className="btn2" style= {{float:"none", textTransform:"lowercase"}} href="/MarcaList"><FormattedMessage id="Brands"/><span className="bg"></span></a></p>
                                    </div>
                                    <a href="/MarcaList" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="http://www.logospng.com/images/97/branding-in-the-digital-economy-modern-agency-97149.png" alt="marc" width="100%" height="100%" /></a>

                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/DestinoList" style= {{width:"100%", height:"100%", paddingTop:"10%"}}><img src="http://www.vistieservizi.it/wp-content/uploads/2017/03/Travel-Merchant-Account.png" alt="dest" width="100%" height="100%" /></a>
                                    <div>
                                        <h2><FormattedMessage id="Destinations"/></h2>
                                        <p><FormattedMessage id="DestinationsMessage"/></p>
                                        <p><a className="btn2" style= {{float:"none", textTransform:"lowercase"}} href="/DestinoList"><FormattedMessage id="Destinations"/><span className="bg"></span></a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/UsuarioList" style= {{width:"100%", height:"100%", paddingTop:"15%"}}><img src="https://www.knack.com/_images/live/users.png" alt="usua" width="100%" height="100%" /></a>
                                    <div>
                                        <h2><FormattedMessage id="Users"/></h2>
                                        <p><FormattedMessage id="UsersMessage"/></p>
                                        <p><a className="btn2" style= {{float:"none", textTransform:"lowercase"}} href="/UsuarioList"><FormattedMessage id="Users"/><span className="bg"></span></a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <a href="/FacturaList" style= {{width:"100%", height:"100%", paddingTop:"20%"}}><img src="https://www.factura-e.mx/wp-content/uploads/2017/05/Facturas-Electr%C3%B3nicas.png" alt="fact" width="100%" height="100%" /></a>
                                    <div>
                                        <h2><FormattedMessage id="Bills"/></h2>
                                        <p><FormattedMessage id="BillsMessage"/></p>
                                        <p><a className="btn2" style= {{float:"none", textTransform:"lowercase"}} href="/FacturaList"><FormattedMessage id="Bills"/><span className="bg"></span></a></p>
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
export default Home;
