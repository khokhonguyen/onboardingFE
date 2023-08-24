import React from "react";
import '../../App.css';
import Header from "../Header";
import Cardthanhvien from "../Cardthanhvien";
import Cardchuongtrinh from "../Cardchuongtrinh";
import Footer from "../Footer";
function home() {
  return (<>
    <Header/>
    <div className="center-card">
    <Cardthanhvien/>
    <Cardchuongtrinh/>
    <div></div>
    </div>
    <Footer/>
    </>
  );
}

export default home;
