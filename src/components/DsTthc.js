import React, { Component, useEffect, useState, Text } from 'react';
import jsonData from '../jsonTthc.json';
import jsonDanhMuc from '../jsonTthc_danhmuc.json';
import Spinner from '../Spinner';
import ClayButton from '@clayui/button';
import ClayModal, { useModal } from '@clayui/modal';

export default function DsTthc() {
    let [loading, setLoading] = useState(false);
    const [tuKhoa, setTuKhoa] = useState();
    const [idTinhTrang, setIdTinhTrang] = useState(-1);
    const [idCapDonVi, setIdCapDonVi] = useState(-1);
    const [idCtth, setIdCtth] = useState(-1);
    const listDmTinhTrang = jsonDanhMuc.danhMucTinhTrang;
    const listDmCapDonVi = jsonDanhMuc.danhMucCapDonVi;
    const listDmCtth = jsonDanhMuc.danhMucCachThucTH;
    const [listFilter, setListFilter] = useState([]);
    const [itemTthc, setItemTthc] = useState();
    const [mapIdDropdown, setMapIdDropdown] = useState({});

    //Dialog
    const [visibleDialog, setVisibleDialog] = useState(false);
    const { observer, onClose } = useModal({
        onClose: () => setVisibleDialog(false)
    });

    function filterSubmit(e) {
        e.preventDefault();
        filterAsync().then(result => {
            setListFilter(result);
        });
    }

    useEffect(() => {
        {
            listFilter.map(function (i) {
                console.log('>' + i.TRINHTUTHUCHIEN.length + ' ' + i.MATTHC)
            })
        }
        setLoading(false);
    }, [listFilter])

    async function filterAsync() {
        const temp = await jsonData.filter(obj =>
            (idCapDonVi == -1 || obj.CAPTHUCHIEN.some(item => item.CAPTHUCHIEN == idCapDonVi))
            && (idTinhTrang == -1 || obj.TRANGTHAI == idTinhTrang)
            && (idCtth == -1 || obj.CACHTHUCTHUCHIEN.some(item => item.KENH == idCtth))
            && (!tuKhoa || obj.MATTHC.toLowerCase().includes(tuKhoa.toLowerCase()) || obj.TENTTHC.toLowerCase().includes(tuKhoa.toLowerCase()))
        );
        return temp;
    }

    function handleDropdownChange(key, value) {
        console.log(key);
        console.log(value);
        setMapIdDropdown(prevState => ({
            ...prevState,
            [key]: value
        }));
    }

    return (
        <section className="content">
            <Spinner loading={loading} />
            <div className="container-fluid">
                <h3 className="tle mb-0">Danh m???c th??? t???c h??nh ch??nh qu???c gia<br /><span className="line"></span></h3>
                <form action="#">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-8" style={{ float: "none", margin: "0 auto" }}>
                                    <div className="form-group">
                                        <label>T??n/m?? th??? t???c h??nh ch??nh: </label>
                                        <div className="input-group">
                                            <input className="form-control" type="type" placeholder="Nh???p t??? kh??a t??m ki???m" onChange={e => setTuKhoa(e.target.value)} />
                                            <span className="input-group-btn"><span className="btn group-btn-custom" onClick={e => { setLoading(true); filterSubmit(e) }}>T??m ki???m</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 filter-row-tthc" style={{ float: "none", margin: "0 auto" }}>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>C???p ????n v???: </label>
                                            <select value={idCapDonVi} className="form-control color-gray" onChange={e => setIdCapDonVi(e.target.value)} >
                                                <option value="-1" >--T???t c???--</option>
                                                {listDmCapDonVi.map(function (i) {
                                                    return <option value={i.id}>{i.name}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>C??ch th???c th???c hi???n: </label>
                                            <select value={idCtth} className="form-control color-gray" onChange={e => setIdCtth(e.target.value)} >
                                                <option value="-1" >--T???t c???--</option>
                                                {listDmCtth.map(function (i) {
                                                    return <option value={i.id}>{i.name}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Tr???ng th??i: </label>
                                            <select value={idTinhTrang} className="form-control color-gray" onChange={e => setIdTinhTrang(e.target.value)} >
                                                <option value="-1" >--T???t c???--</option>
                                                {listDmTinhTrang.map(function (i) {
                                                    return <option value={i.id}>{i.name}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-10" style={{ float: "none", margin: "0 auto" }}>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hover table-list">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: "5%" }}>STT</th>
                                                    <th style={{ width: "45%" }}>Th??? t???c</th>
                                                    <th style={{ width: "30%" }}>C?? quan th???c hi???n</th>
                                                    <th style={{ width: "20%" }}>L??nh v???c</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {listFilter && listFilter.length > 0 ?
                                                    listFilter.map(function (item, index) {
                                                        return (
                                                            <tr onClick={e => { setItemTthc(item); setVisibleDialog(true); }} style={{ cursor: "pointer" }}>
                                                                <td className="text-center">
                                                                    {index + 1}
                                                                </td>
                                                                <td className="text-left">
                                                                    <span className="color-matthc">{item.MATTHC}</span>  {item.TENTTHC}
                                                                </td>
                                                                <td className="text-left">
                                                                    {item.COQUANTHUCHIEN.map(i => <div>-{i.TENDONVI}</div>)}
                                                                </td>
                                                                <td className="text-left">
                                                                    {item.LINHVUCTHUCHIEN.map(i => <div>{i.TENLINHVUC}</div>)}
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                    :
                                                    <tr><td className="text-center" colSpan="4">Kh??ng c?? d??? li???u</td></tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {visibleDialog && (
                                <ClayModal
                                    observer={observer}
                                    size="lg">
                                    <ClayModal.Header>Th??ng tin th??? t???c h??nh ch??nh</ClayModal.Header>
                                    <ClayModal.Body>
                                        <h4 style={{ fontWeight: "600" }}><span className="color-matthc">{itemTthc.MATTHC}</span>  {itemTthc.TENTTHC} </h4>
                                        <table className="tt-details">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        ?????a ch??? ti???p nh???n
                                                    </td>
                                                    <td>
                                                        {itemTthc.DIACHITIEPNHAN ? itemTthc.DIACHITIEPNHAN : '??ang c???p nh???t'}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        M?? t??? c?? quan th???c hi???n
                                                    </td>
                                                    <td>
                                                        {itemTthc.MOTACOQUANTHUCHIEN ? itemTthc.MOTACOQUANTHUCHIEN.split('\n').map(i => <div>{i}</div>) : '??ang c???p nh???t'}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        ?????i t?????ng th???c hi???n
                                                    </td>
                                                    <td>
                                                        {itemTthc.DOITUONGTHUCHIEN.map(i => i.TENDOITUONG).join("; ")}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        C??ch th???c th???c hi???n
                                                    </td>
                                                    <td>
                                                        <select className="form-control" onChange={e => handleDropdownChange("CACHTHUCTHUCHIEN", e.target.value)} >
                                                            {itemTthc.CACHTHUCTHUCHIEN.map(function (item, index) {
                                                                return <option value={index}>{listDmCtth.filter((i) => i.id == item.KENH)[0].name}</option>
                                                            })}
                                                        </select>
                                                        {itemTthc.CACHTHUCTHUCHIEN[mapIdDropdown.hasOwnProperty("CACHTHUCTHUCHIEN") ? mapIdDropdown.CACHTHUCTHUCHIEN : 0].THOIGIAN.map(function (i) {
                                                            return (<div>- Th???i gian gi???i quy???t: {i.MOTA}<br/>- Ph??, l??? ph??: {i.PHILEPHI[0]?.SOTIEN}</div>)
                                                        })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Tr??nh t??? th???c hi???n
                                                    </td>
                                                    <td>
                                                        <select className="form-control" onChange={e => handleDropdownChange("TRINHTUTHUCHIEN", e.target.value)} >
                                                            {itemTthc.TRINHTUTHUCHIEN.map(function (item, index) {
                                                                return <option value={index}>{item.TRUONGHOP ? item.TRUONGHOP : index + 1}</option>
                                                            })}
                                                        </select>
                                                        {itemTthc.TRINHTUTHUCHIEN[mapIdDropdown.hasOwnProperty("TRINHTUTHUCHIEN") ? mapIdDropdown.TRINHTUTHUCHIEN : 0].TRINHTU[0].TENTRINHTU.split('\n').map(i => <div>{i}</div>)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Th??nh ph???n h??? s??
                                                    </td>
                                                    <td>
                                                        <select className="form-control" onChange={e => handleDropdownChange("THANHPHANHOSO", e.target.value)} >
                                                            {itemTthc.THANHPHANHOSO.map(function (item, index) {
                                                                return <option value={index}>{item.TRUONGHOP ? item.TRUONGHOP : index + 1}</option>
                                                            })}
                                                        </select>
                                                        {itemTthc.THANHPHANHOSO[mapIdDropdown.hasOwnProperty("THANHPHANHOSO") ? mapIdDropdown.THANHPHANHOSO : 0].GIAYTO.map(function (item) {
                                                            if (item.URL)
                                                                return <div><a href={item.URL} download>- {item.TENGIAYTO}<i class="fas fa-paperclip" /></a>
                                                                    {/* (S??? b???n ch??nh: {item.SOBANCHINH ? item.SOBANCHINH : 0}, S??? b???n sao: {item.SOBANSAO ? item.SOBANSAO : 0}) */}
                                                                </div>
                                                            else {
                                                                return <div><span>- {item.TENGIAYTO}</span></div>
                                                            }
                                                        })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        K???t qu??? th???c hi???n
                                                    </td>
                                                    <td>
                                                        {itemTthc.KETQUATHUCHIEN.map(function (item) {
                                                            if (item.URL)
                                                                return <div><a href={item.URL} download>- {item.TENKETQUA}<i class="fas fa-paperclip" /></a>
                                                                </div>
                                                            else {
                                                                return <div><span>- {item.TENKETQUA}</span></div>
                                                            }
                                                        })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        C??n c??? ph??p l??
                                                    </td>
                                                    <td>
                                                        {itemTthc.CANCUPHAPLY.map(function (item) {
                                                            return <div><a href={item.DIACHITRUYCAP} target="_blank">- {item.TENVANBAN} (s??? {item.SOVANBAN}) ban h??nh ng??y {item.NGAYBANHANH}<i class="fas fa-paperclip" /></a></div>
                                                        })}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </ClayModal.Body>
                                    <ClayModal.Footer last={<ClayButton displayType="secondary" onClick={onClose}>????ng</ClayButton>} />
                                </ClayModal>
                            )}
                        </div>
                    </div>
                </form>
            </div >
        </section >
    );
}