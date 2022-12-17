import React from 'react'
import { useState } from 'react'
import './account.css'

const Account = () => {
    const [page,setPage] = useState("1")
    console.log(page)
    return (
    <div>
        <select value={page} onChange={e => setPage(e.target.value)} className="page">
            <option value="1">Thông tin chung</option>
            <option value="2">Thông tin chi tiết</option>
            <option value="3">Lịch sử mua vé</option>
            <option value="4">Adminpage</option>
        </select>

        {page === "1" ? (
            <div className="page1">
                <div className="my-account">
                    <div className="dashboard">
                        <div className="page-title"  >
                            <h1>Thông tin chung</h1>
                        </div>
                        <div className="format-profile">
                            <div className="my-profile">
                                <div className="image-profile">
                                </div>
                                <div className="barcode-my">
                                    <div className="show-barcode-my"  >
                                        <strong>Thẻ thành viên</strong>
                                    </div>
                                    <div className="show-barcode-my-cgv"  >
					                    <img src="defaut" alt="" />
									</div>
                                </div>
                            </div>
                            <div className="welcome-msg"  >
                                <p className="hello"><strong>Xin chào bao nguyen,</strong></p>
                                <p>Với trang này, bạn sẽ quản lý được tất cả thông tin tài khoản của mình.</p>
                            </div>
                        </div>
                        <div className="box-account box-info">
                            <div className="box-head"  >
                                <h2>Thông tin tài khoản</h2>
                            </div>
                            <div className="box"  >
                                <div className="box-title"  >
                                    <h3 className="title-my">Liên hệ</h3>
                                    <a href="defaut"  >Thay đổi</a>
                                </div>
                                <div className="box-content box-content-my col2-set"  >
                                    <span>Tên : bao nguyen</span>
                                    <span>Email : jonnybao091@gmail.com</span>
                                    <span>Tên đăng nhập : 0377707361</span>
                                    <span>Điện thoại : 0377707361</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            console.log("cc")
        )}
        
        {page === "2" ? (
            <div className="my-account">
                <div className="page-title">
                    <h1>Thay đổi thông tin</h1>
                </div>
                <form method='post' id='form-validate' className='scaffold-form edit-account'>
                    <ul>
                        <li className="fields">
                            <div className="input-box"   >
                                <input type="text" id="fullname" name="fullname"  title ="full name" placeholder="Họ và tên" className="input-text required-entry"/>
                            </div>
                        </li>

                        <li className="fields phone_user">
                            <div className="input-box"   >
						        <input type="tel" name="telephone" id="telephone"  title="Phone Number" placeholder='số điện thoại' className="input-text validate-mobile required-entry"/>
					        </div>
                        </li>

                        <li>
                            <label htmlFor="gender" className="required"><em>*</em>Giới tính</label>
                            <div className="input-box"   >
                                <input type="radio" name="gender" value="1" /><em>nam</em>
                                <input type="radio" name="gender" value="2" /><em>nữ</em>
                                <input type="radio" name="gender" value="113"/><em>both</em>
                            </div>
                        </li>

                        <li>					
                            <label htmlFor="month">Ngày sinh</label>
                            <div className="input-box customer-dob"   >
                                SEP 14 2002					
                            </div>
                        </li>

                        <li>
                            <label htmlFor="email" className="required"><em>*</em>Địa chỉ email</label>
                            <div className="input-box"   >
                                jonnybao091@gmail.com                
                            </div>
                        </li>

                        <li className="fields field-country">
				            <div className="field field-country-first"   >
							    <label htmlFor="region_id" className="required "><em>*</em>Thành phố/Tỉnh</label>
					            <div className="input-box"   >
                                    <select id="region_id" name="region_id" title="Tỉnh/Tp" className="validate-select validation-passed">
                                        <option value="">Vui lòng chọn...</option>
                                        <option value="65">Hồ Chí Minh</option>                                                       
                                        <option value="64">Hà Nội</option>                                                       
                                        <option value="60">Đà Nẵng</option>                                                       
                                        <option value="48">Cần Thơ</option>                                                       
                                        <option value="39">Đồng Nai</option>                                                       
                                        <option value="62">Hải Phòng</option>                                                       
                                        <option value="13">Quảng Ninh</option>                                                       
                                        <option value="43">Bà Rịa-Vũng Tàu</option>                                                       
                                        <option value="31">Bình Định</option>                                                       
                                        <option value="57">Bình Dương</option>                                                       
                                        <option value="33">Đắk Lắk</option>                                                       
                                        <option value="51">Trà Vinh</option>                                                       
                                        <option value="06">Yên Bái</option>                                                       
                                        <option value="49">Vĩnh Long</option>                                                       
                                        <option value="47">Kiên Giang</option>                                                       
                                        <option value="73">Hậu Giang</option>                                                       
                                        <option value="23">Hà Tĩnh</option>                                                       
                                        <option value="32">Phú Yên</option>                                                       
                                        <option value="58">Bình Phước</option>                                                       
                                        <option value="40">Bình Thuận</option>                                                       
                                        <option value="59">Cà Mau</option>                                                       
                                        <option value="04">Cao Bang</option>                                                       
                                        <option value="72">Dak Nong</option>                                                       
                                        <option value="71">Dien Bien</option>                                                       
                                        <option value="45">Đồng Tháp</option>                                                       
                                        <option value="54">Bac Giang</option>                                                       
                                        <option value="30">Gia Lai</option>                                                       
                                        <option value="44">An Giang</option>                                                       
                                        <option value="55">Bac Lieu</option>                                                       
                                        <option value="03">Ha Giang</option>                                                       
                                        <option value="63">Ha Nam</option>                                                       
                                        <option value="53">Bac Cạn</option>                                                       
                                        <option value="56">Bac Ninh</option>                                                       
                                        <option value="50">Ben Tre</option>                                                       
                                        <option value="15">Ha Tay</option>                                                       
                                        <option value="61">Hai Duong</option>                                                       
                                        <option value="14">Hoa Binh</option>                                                       
                                        <option value="66">Hưng Yên</option>                                                       
                                        <option value="34">Khánh Hòa</option>                                                       
                                        <option value="28">Kon Tum</option>                                                       
                                        <option value="01">Lai Chau</option>                                                       
                                        <option value="35">Lam Dong</option>                                                       
                                        <option value="09">Lạng Sơn</option>                                                       
                                        <option value="02">Lao Cai</option>                                                       
                                        <option value="41">Long An</option>                                                       
                                        <option value="67">Nam Dinh</option>                                                       
                                        <option value="22">Nghệ An</option>                                                       
                                        <option value="18">Ninh Binh</option>                                                       
                                        <option value="36">Ninh Thuan</option>                                                       
                                        <option value="68">Phú Thọ</option>                                                       
                                        <option value="24">Quảng Binh</option>                                                       
                                        <option value="27">Quảng Nam</option>                                                       
                                        <option value="29">Quảng Ngãi</option>                                                       
                                        <option value="25">Quảng Tri</option>                                                       
                                        <option value="52">Sóc Trăng</option>                                                       
                                        <option value="05">Sơn La</option>                                                       
                                        <option value="37">Tây Ninh</option>                                                       
                                        <option value="20">Thai Binh</option>                                                       
                                        <option value="69">Thái Nguyên</option>                                                       
                                        <option value="21">Thanh Hoa</option>                                                       
                                        <option value="26">Thua Thien-Hue</option>                                                       
                                        <option value="46">Tiền Giang</option>                                                       
                                        <option value="07">Tuyen Quang</option>                                                       
                                        <option value="70">Vinh Phuc</option>                                                       
                                    </select>
                                </div>
                            </div>
                        </li>

                        <li className="wide">
                            <label htmlFor="street_1" className="required"><em>*</em>Địa chỉ</label>
                            <div className="input-box"   >
                                <input type="text" name="street[]" placeholder='No address 700' title="Địa chỉ" id="street_1" className="input-text required-entry"/>
                            </div>
                        </li>

                        <li>
                            <div className="check-field-change-pass control"   >
                                <input type="checkbox" name="change_password" id="change_password" value="1"  title="Đổi mật khẩu" className="checkbox validation-passed"/>
                                <label className="change-pass-normal" htmlFor="change_password">Tôi muốn thay đổi mật khẩu</label>
                            </div>

                            <div className="fieldset changepass">
                                <h2 className="legend">Đổi mật khẩu</h2>
                                <ul className="form-list">
                                    <li className="fields">
                                        <div className="field left"   >
                                            <label htmlFor="password" className="required"><em>*</em>Mật khẩu mới</label>
                                            <div className="input-box"   >
                                                <input type="password" title="Mật khẩu mới" className="input-text required-entry validate-password" name="password" id="password" aria-autocomplete="list"/>
                                            </div>
                                        </div>
                                        <div className="field right"   >
                                            <label htmlFor="confirmation" className="required"><em>*</em>Nhập lại mật khẩu mới</label>
                                            <div className="input-box"   >
                                                <input type="password" title="Nhập lại mật khẩu mới" className="input-text required-entry validate-cpassword" name="confirmation" id="confirmation"/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
        ):(
            console.log("cc")
        )}

        {page === "3" ? (
            <div className="page3">
                
            </div>
        ):(
            console.log("cc")
        )}

        {page=== "4"?(
            <div className="page3">
                
            </div>
        ):(
            console.log("cc")
        )}

    </div>
  )
}

export default Account