import React, { Component } from 'react';
import Navbar from './CustomNavbar';
import Footer from './CustomFooter';
import ApiHub from './ApiHub';
import bg from '../img/bg.svg';
import active from '../img/active.png';
import pending from '../img/pending.png';
import process from '../img/process.png';
import DsTthc from './DsTthc';
import TraCuuHoSo from './TracuuHoso';

export default function Home() {
    return (
        <div>
            <Navbar />
            <body>
                <section id="body-of-portlet" class="">
                    <div class="columns-1" id="main-content" role="main">
                        <div class="portlet-layout row">
                            <div class="col-md-12 portlet-column portlet-column-only" id="column-1" style={{ padding: "0px" }}>
                                <div class="portlet-dropzone portlet-column-content portlet-column-content-only" id="layout-column_column-1">
                                    <div class="portlet-boundary portlet-boundary_vn_gov_data_portlet_DatagovPortlet_  portlet-static portlet-static-end decorate  " id="p_p_id_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke_">
                                        <span id="p_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke"></span>
                                        <section class="portlet" id="portlet_vn_gov_data_portlet_DatagovPortlet_INSTANCE_bc88LZV1MHke">
                                            <div class="portlet-content" style={{ marginTop: '-25px' }}>
                                                <div class=" portlet-content-container">
                                                    <div class="portlet-body">
                                                        <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
                                                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                                                        <script src="http://123.30.158.153:2000/socket.io/socket.io.js"></script>
                                                        <section class="bg-slide container-fluid">
                                                            <div class="row">
                                                                <div class="col-md-4 col-md-offset-1 mt-30slide">
                                                                    <form class="mt-150" action="#">
                                                                        <div class="input-group">
                                                                            <input type="text" class="form-control bo-l bo-none" name="q" placeholder="B???n c???n t??m g???" id="inputlg" />
                                                                            <div class="input-group-btn">
                                                                                <button class="btn btn-default bo-r bo-none" type="submit" style={{ width: '37px', marginLeft: '-15px', height: '40px', borderRadius: '25px' }}>
                                                                                    <i class="fas fa-search text-xam"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                    <h2 style={{ fontWeight: '200', color: '#fff', fontSize: '40px', textShadow: '0 1px 2px rgb(0 0 0 / 80%)' }}>C???p nh???t c?? s??? d??? li???u v??? TTHC</h2>
                                                                    <p style={{ color: '#fff', height: '10px' }}>Th???c hi???n vi???c k???t n???i, thu nh???n d??? li???u v??? k???t qu??? gi???i quy???t th??? t???c h??nh ch??nh c???a c??c Ph???n m???m chuy??n ng??nh, Ph???n m???m v??n b???n ch??? ?????o ??i???u h??nh</p>
                                                                </div>
                                                                <div class="col-md-5 text-center col-md-offset-2"><img class="img-responsive" src={bg} style={{ marginTop: "-30px", height: "580px" }} /></div>
                                                            </div>
                                                        </section>

                                                        <section>
                                                            <div class="container">
                                                                <h3 class="tle mb-0">Hi???n tr???ng k???t n???i chia s??? d??? li???u<br /><span class="line"></span></h3>
                                                                <div class="table-responsive">
                                                                    <table class="table table-bordered table-striped table-hover">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>STT</th>
                                                                                <th><a class="text-trang" href="#" data-toggle="tooltip" title="" data-original-title="...">H??? th???ng chia s???, t??ch h???p</a></th>
                                                                                <th><a class="text-trang" href="#" data-toggle="tooltip" title="" data-original-title="H??? th???ng qu???n l?? t???p trung, d??? ??n x??y d???ng theo y??u c???u ">H??? th???ng</a></th>
                                                                                <th><a class="text-trang" href="#" data-toggle="tooltip" title="" data-original-title="D??? li???u xe thu th???p v?? qu???n l?? trong CSDL">T??i li???u</a></th>
                                                                                <th><a class="text-trang" href="#" data-toggle="tooltip" title="" data-original-title="Quy chu???n c???u tr??c d??? li???u trao ?????i theo quy ?????nh">K???t n???i <br />LGSP</a></th>
                                                                                <th><a class="text-trang" href="#" data-toggle="tooltip" title="" data-original-title="Cung c???p d???ch v??? theo chu???n v?? qua NGSP">Tr???ng th??i <br />t??ch h???p tr??n c???ng DVC</a></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="text-center">1</td>
                                                                                <td>
                                                                                    CSDLQG v??? D??n c??
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={process} alt="" data-original-title="??ang tri???n khai d??? ??n" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={process} alt="" data-original-title="??ang ph??t phi???u thu th???p to??n qu???c, m???t s??? t???nh ???? x??y d???ng" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={process} alt="" data-original-title="Ngh??? ?????nh 137/2015/N??-CP" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={process} alt="" data-original-title="QCVN 109L2017/BTTTT" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-center">2</td>
                                                                                <td>
                                                                                    CSDLQG v??? ????ng k?? doanh nghi???p
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="Thu???c h??? th???ng ????ng k?? doanh nghi???p ??ang v???n h??nh" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={process} alt="" data-original-title="N??  78/2015/N??-CP v?? 108/2018/N??-CP nh??ng c?? li??n quan" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={pending} alt="" data-original-title="Ch??a chu???n h??a v?? ban h??nh" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-center">3</td>
                                                                                <td>
                                                                                    T??ch h???p l??nh v???c B???o hi???m x?? h???i
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={process} alt="" data-original-title="??ang tri???n khai d??? ??n VILG" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={process} alt="" data-original-title="M???t s??? ?????a ph????ng ???? c?? ngu???n d??? li???u" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={process} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={pending} alt="" data-original-title="Th??ng t?? 75/2015/TT-BTNMT nh??ng ch??a ph???i cho CSDLQG" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-center">4</td>
                                                                                <td>
                                                                                    H??? th???ng th??ng tin qu???n l?? h???p ?????ng c??ng ch???ng
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={pending} alt="" data-original-title="M???i l???p ????? ??n" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={pending} alt="" data-original-title="C??c CSDL chuy??n ng??nh ???? v???n h??nh l?? ngu???n thu th???p" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={pending} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={pending} alt="" data-original-title="" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-center">5</td>
                                                                                <td>
                                                                                    K???t n???i CSDL Qu???c Gia V??? TTHC (*)
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="C??c CSDL chuy??n ng??nh ???? ???????c x??y d???ng" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-center">6</td>
                                                                                <td>
                                                                                    K???t n???i CSDL Qu???c gia v??? Thanh to??n tr???c tuy???n (*)
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={process} alt="" data-original-title="" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-center">7</td>
                                                                                <td>
                                                                                    K???t n???i CSDL Qu???c gia v??? Thanh to??n thu??? ?????t (*)
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-center">8</td>
                                                                                <td>
                                                                                    T??ch h???p l??nh v???c H??? t???ch t?? ph??p
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-center">9</td>
                                                                                <td>
                                                                                    T??ch h???p l??nh v???c L?? l???ch t?? ph??p
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td class="text-center">10</td>
                                                                                <td>
                                                                                    T??ch h???p h??? th???ng danh m???c d??ng chung qua tr???c LGSP
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <img data-toggle="tooltip" title="" src={active} alt="" data-original-title="" />
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div>
                                                                        <a style={{ fontWeight: 'bold' }}>Ch?? th??ch: </a>
                                                                    </div>
                                                                    <div class="row" style={{ maxWidth: '100' + '%', textAlign: 'center' }}>
                                                                        <div class="col-md-4 mb-10"><img class="mr-10" src={active} alt="" height="30" /><em class="text-muted lin2">???? th???c hi???n</em></div>
                                                                        <div class="col-md-4 mb-10"><img class="mr-10" src={process} alt="" height="30" /><em class="text-muted lin2">??ang th???c hi???n</em></div>
                                                                        <div class="col-md-4 mb-10"><img class="mr-10" src={pending} alt="" height="30" /><em class="text-muted lin2">Ch??a th???c hi???n</em></div>
                                                                    </div>
                                                                    <div>
                                                                        <a style={{ fontStyle: "oblique", fontSize: "small" }}>* C??c k???t n???i CSDLQG ???????c quy ?????nh t???i Quy???t ?????nh s??? 714/Q??-TTg c???a Th??? t?????ng Ch??nh ph??? kh??ng th??ng qua tr???c LGSP</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                        <section>
                                                            <ApiHub/>
                                                        </section>                                                        
                                                        <section>
                                                            <TraCuuHoSo/>
                                                        </section>
                                                        <section>
                                                            <DsTthc />
                                                        </section>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
            <Footer />
        </div>
    );
}
