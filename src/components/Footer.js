import React from "react";
import "./Footer.css";
import logo from "../assets/images/logopage.png";



function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="contacts">
          <img src={logo} className="footerlogo" />
          <div className="footertext">
            <h3>
              <i>
                TTTM thuộc dự án tại xã Long Hưng, TP. Biên Hoà, tỉnh Đồng Nai
              </i>
            </h3>
            <h3>Email: onboarding.gmail.com.vn</h3>
            <h3>Tổng đài CSKH: xxxxx</h3>
            <h3>
              <b>GIỜ MỞ CỬA: 9:30 - 22:00</b>
            </h3>
          </div>
        </div>
        <div className="signup">
          <h3 className="lienhe">Liên hệ ngay</h3>
          <form className="form">
            <input
              type="text"
              id="myText"
              placeholder="Họ & Tên"
            />
            <input type="text" placeholder="Điện thoại" />
            <input type="text" placeholder="Email" />
          </form>
          <button type="submit" id="submit">
            GỬI NGAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
