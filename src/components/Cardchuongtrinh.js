import React from "react";
import CardItemCT from "./CardItemCT";
import hinh from "../assets/images/chuongtrinh.png";
import "./Cardchuongtrinh.css";
import { Link } from "react-router-dom";
function Cardchuongtrinh() {
  return (
    <div className="chuongtrinh">
      <h1 className="title">CHƯƠNG TRÌNH</h1>
      <div className="cards__wrapper__ct">
        <ul className="cards__items__ct">
          <Link to="/chitietchuongtrinh" className="linkct" >
            <CardItemCT
              src={hinh}
              text="11/11/2003"
              p="Quy hoạch Khu đô thị Phú Mỹ Hưng của Đại Phú Mỹ nhận giải thưởng quốc tế tại Hoa Kỳ"
              label=""
              path="/"
            />
          </Link>
        </ul>
        <ul className="cards__items__ct">
          <Link to="/chitietchuongtrinh"className="linkct" >
            <CardItemCT
              src={hinh}
              text="11/11/2003"
              p="Quy hoạch Khu đô thị Phú Mỹ Hưng của Đại Phú Mỹ nhận giải thưởng quốc tế tại Hoa Kỳ"
              label=""
              path="/"
            />
          </Link>
        </ul>
        <ul className="cards__items__ct">
          <Link to="/chitietchuongtrinh" className="linkct">
            <CardItemCT
              src={hinh}
              text="11/11/2003"
              p="Quy hoạch Khu đô thị Phú Mỹ Hưng của Đại Phú Mỹ nhận giải thưởng quốc tế tại Hoa Kỳ"
              label=""
              path="/"
            />
          </Link>
        </ul>
        <ul className="cards__items__ct">
          <Link to="/chitietchuongtrinh" className="linkct">
            <CardItemCT
              src={hinh}
              text="11/11/2003"
              p="Quy hoạch Khu đô thị Phú Mỹ Hưng của Đại Phú Mỹ nhận giải thưởng quốc tế tại Hoa Kỳ"
              label=""
              path="/"
            />
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Cardchuongtrinh;
