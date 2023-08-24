import React from "react";
import CardItem from "./CardItem";
import avatar from "../assets/images/avatar.png";
import "./Cardthanhvien.css";
function Cardthanhvien() {
  return (
    <div className="cardthanhvien">
      <h1 className="title">THÀNH VIÊN</h1>
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem
            src={avatar}
            text="Nguyễn Văn A"
            p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected... "
            label=""
            path="/"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src={avatar}
            text="Nguyễn Văn B"
            p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected... "
            label=""
            path="/"
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src={avatar}
            text="Nguyễn Văn C"
            p="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected... "
            label=""
            path="/"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cardthanhvien;
