import React from "react";
import "../../App.css";
import Header from "../Header";
import CarditemCT from "../CardItemCT";
import hinh from "../../assets/images/chuongtrinh.png";
import Footer from "../Footer";
import cardchuongtrinhimg from "../../assets/images/cardchuongtrinhimg.png";
import cardchuongtrinhimg2 from "../../assets/images/cardchuongtrinhimg2.png";
import "./chitietchuongtrinh.css";
import { Link } from "react-router-dom";
function chitietchuongtrinh() {
  return (
    <div className="tong">
      <Header />
      <div class="chitietchuongtrinh">
        <div className="section1">
          <div className="objectwrap">
          <div className="date">11/11/2003</div>
          <h3 className="titlechuongtrinh">Chương trình A</h3>
          <div className="contact-i">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="34"
              viewBox="0 0 37 34"
              fill="none"
            >
              <path
                d="M29.2679 3.0625H7.11813C4.86158 3.0625 3.03219 4.75928 3.03219 6.85243V27.3976C3.03219 29.4908 4.8615 31.1876 7.11813 31.1876H18.0423L18.0609 21.1372H15.2459C14.8801 21.1372 14.5831 20.8628 14.5817 20.5235L14.5682 17.2838C14.5668 16.9426 14.8646 16.6654 15.2325 16.6654H18.0424V13.535C18.0424 9.90233 20.4343 7.92429 23.928 7.92429H26.7949C27.1617 7.92429 27.4591 8.20011 27.4591 8.5404V11.2721C27.4591 11.6123 27.1619 11.888 26.7953 11.8882L25.0359 11.889C23.1359 11.889 22.768 12.7264 22.768 13.9554V16.6654H26.9429C27.3407 16.6654 27.6494 16.9876 27.6025 17.3541L27.1885 20.5937C27.1489 20.9037 26.8655 21.1373 26.529 21.1373H22.7866L22.768 31.1877H29.268C31.5246 31.1877 33.3539 29.4909 33.3539 27.3979V6.85243C33.3538 4.75928 31.5245 3.0625 29.2679 3.0625Z"
                fill="#0E4EAD"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="34"
              viewBox="0 0 37 34"
              fill="none"
            >
              <path
                d="M12.7373 31.1642C10.9323 31.1642 9.12064 31.2222 7.31563 31.1578C5.18003 31.074 3.54692 29.3272 3.54692 27.2453C3.54692 20.5225 3.56014 13.7998 3.54692 7.07055C3.54692 4.76948 5.3916 3.16452 7.51398 3.10651C9.73554 3.0485 11.9637 3.09362 14.1919 3.09362C14.2315 3.09362 14.2844 3.07428 14.3043 3.13874C14.291 3.25476 14.172 3.26765 14.0993 3.31277C12.7902 4.06046 11.5934 4.9564 10.5885 6.06504C8.9289 7.89559 7.77845 9.99686 7.38836 12.4397C6.70073 16.7518 8.08259 20.4129 11.21 23.4682C11.7653 24.016 11.8381 24.4414 11.3951 25.1762C10.8595 26.0593 10.0463 26.6587 9.18015 27.2066C9.08758 27.2582 8.99502 27.3226 8.90245 27.3806C8.76361 27.4967 8.84956 27.5547 8.96857 27.6062C8.99502 27.6642 9.02808 27.7158 9.06775 27.7674C9.8281 28.4248 10.5488 29.1274 11.2959 29.7977C11.6463 30.1136 11.9968 30.4423 12.334 30.771C12.4728 30.8935 12.7042 30.9322 12.7373 31.1642Z"
                fill="#0E4EAD"
              />
              <path
                d="M12.7375 31.1619C12.7044 30.9363 12.473 30.8976 12.3342 30.7623C11.997 30.4271 11.6466 30.1048 11.2961 29.789C10.549 29.1187 9.82833 28.4161 9.06797 27.7586C9.0283 27.7071 8.99524 27.6555 8.9688 27.5975C10.6548 27.9198 12.3011 27.7006 13.921 27.2172C14.4698 27.0561 15.0186 26.8949 15.574 26.7596C15.9508 26.6629 16.3475 26.6822 16.7112 26.8111C20.903 28.2163 25.042 28.0874 29.1149 26.347C30.7744 25.6316 32.2885 24.6261 33.5712 23.3692C33.6373 23.3047 33.6836 23.208 33.8026 23.2016C33.8621 23.2918 33.8291 23.3885 33.8291 23.4852V27.2559C33.8423 29.4087 32.0703 31.1619 29.862 31.1812H29.8289C27.4487 31.1941 25.0685 31.1812 22.6882 31.1812H13.1342C13.002 31.1684 12.8697 31.1619 12.7375 31.1619Z"
                fill="#0E4EAD"
              />
              <path
                d="M13.7688 16.7387C14.7671 16.7387 15.706 16.7323 16.6383 16.7387C17.1606 16.7452 17.4449 16.9579 17.4978 17.364C17.5573 17.8732 17.2532 18.2148 16.6846 18.2212C15.6135 18.2341 14.549 18.2277 13.4779 18.2277C13.1671 18.2277 12.863 18.2406 12.5522 18.2212C12.1687 18.2019 11.7918 18.1246 11.6067 17.7378C11.4216 17.3511 11.5538 17.003 11.8051 16.6872C12.8233 15.4238 13.8481 14.1541 14.8729 12.8907C14.9324 12.8134 14.9919 12.736 15.0515 12.6651C14.9853 12.5556 14.8928 12.6071 14.8134 12.6007C14.0994 12.5942 13.3787 12.6007 12.6646 12.5942C12.4993 12.5942 12.334 12.5749 12.1753 12.5427C11.7985 12.4589 11.567 12.0915 11.653 11.7305C11.7125 11.4856 11.9109 11.2858 12.1621 11.2278C12.3208 11.1891 12.4861 11.1698 12.6514 11.1698C13.8283 11.1633 15.0118 11.1633 16.1887 11.1698C16.4003 11.1633 16.6052 11.1891 16.8102 11.2407C17.2598 11.3889 17.4515 11.795 17.273 12.2204C17.1143 12.5878 16.8631 12.9036 16.6118 13.2195C15.7457 14.2959 14.8795 15.3658 14.0134 16.4294C13.9407 16.5132 13.8746 16.5969 13.7688 16.7387Z"
                fill="#0E4EAD"
              />
              <path
                d="M21.4384 13.3475C21.5971 13.1477 21.7624 12.9608 22.0335 12.9092C22.5558 12.8061 23.0451 13.1348 23.0517 13.6505C23.0715 14.9396 23.0649 16.2287 23.0517 17.5178C23.0517 17.853 22.8269 18.1495 22.5029 18.2462C22.1723 18.3687 21.7955 18.272 21.5773 17.9948C21.4649 17.8595 21.4186 17.8337 21.2599 17.9561C20.6582 18.4331 19.9772 18.5169 19.2433 18.2849C18.0664 17.911 17.5838 17.0151 17.4515 15.9258C17.3127 14.7462 17.716 13.7407 18.8003 13.1219C19.6995 12.5999 20.612 12.645 21.4384 13.3475ZM19.0979 15.7002C19.1111 15.9838 19.2037 16.2545 19.3756 16.4801C19.7326 16.9442 20.4136 17.0409 20.8963 16.6928C20.9756 16.6348 21.0483 16.5639 21.1145 16.4801C21.4847 15.9902 21.4847 15.1845 21.1145 14.6947C20.9293 14.4433 20.6384 14.295 20.3277 14.2886C19.6004 14.2435 19.0913 14.7914 19.0979 15.7002ZM26.0204 15.7389C25.9675 14.0823 27.0849 12.8448 28.6717 12.7997C30.3577 12.7481 31.5875 13.8503 31.6404 15.4617C31.6933 17.0924 30.6685 18.2462 29.0883 18.4009C27.3626 18.5685 25.9939 17.3503 26.0204 15.7389ZM27.6799 15.5842C27.6667 15.9064 27.7659 16.2223 27.9643 16.4866C28.3279 16.9506 29.0089 17.0409 29.485 16.6799C29.5577 16.6284 29.6172 16.5639 29.6767 16.4994C30.0602 16.0096 30.0602 15.1845 29.6833 14.6947C29.4982 14.4497 29.2073 14.295 28.8965 14.2886C28.1824 14.2499 27.6799 14.7785 27.6799 15.5842ZM25.4386 14.4562C25.4386 15.4553 25.4452 16.4543 25.4386 17.4534C25.4452 17.911 25.0749 18.2913 24.6055 18.3042C24.5261 18.3042 24.4402 18.2978 24.3608 18.2784C24.0303 18.1946 23.779 17.853 23.779 17.4469V12.3227C23.779 12.0197 23.7724 11.7233 23.779 11.4203C23.7856 10.924 24.1096 10.6017 24.5989 10.6017C25.1014 10.5953 25.4386 10.9176 25.4386 11.4332C25.4452 12.4387 25.4386 13.4507 25.4386 14.4562Z"
                fill="#0E4EAD"
              />
              <path
                d="M7.87779 3.3606H29.571C31.8126 3.3606 33.6187 5.1303 33.6187 7.30023V26.8304C33.6187 29.0003 31.8126 30.77 29.571 30.77H7.87779C5.6362 30.77 3.83014 29.0003 3.83014 26.8304V7.30023C3.83014 5.1303 5.6362 3.3606 7.87779 3.3606Z"
                stroke="#0E4EAD"
                stroke-width="0.5"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
          </div>
          <div className="noidung">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat
            nisl pulvinar faucibus eu. Praesent dictum ornare nisl sit donec
            egestas amet, odio in. Nullam tincidunt at condimentum praesent quis
            maecenas nulla consequat. Sit convallis molestie feugiat nulla
            convallis metus interdum. Netus mattis mauris eu magna et enim sed.
            Arcu morbi congue etiam eget amet faucibus. Dictum ullamcorper
            aenean tristique at imperdiet proin. Nulla tristique eu nisi
            viverra.{" "}
          </div>
         
            <img className="hinhminhhoa" src={cardchuongtrinhimg}></img>
         
          <div className="noidung">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat
            nisl pulvinar faucibus eu. Praesent dictum ornare nisl sit donec
            egestas amet, odio in. Nullam tincidunt at condimentum praesent quis
            maecenas nulla consequat. Sit convallis molestie feugiat nulla
            convallis metus interdum. Netus mattis mauris eu magna et enim sed.
            Arcu morbi congue etiam eget amet faucibus. Dictum ullamcorper
            aenean tristique at imperdiet proin. Nulla tristique eu nisi
            viverra. Tempus, ultrices porttitor orci nibh <br/>Egestas sed vitae
            libero sit tellus scelerisque duis dolor nam. Ipsum, elementum proin
            pellentesque tellus amet, sociis. Justo, velit enim ipsum nulla duis
            in. At mattis cursus et habitant purus augue enim, lorem risus.
            Vestibulum, eu nec at tortor amet diam in ac.
          </div>
          
            <img className="hinhminhhoa" src={cardchuongtrinhimg2}></img>
          
     </div>
        <div className="section2">
          <h4 className="tuade">Các chương trình</h4>
          <Link to="/chitietchuongtrinh" className="linkct">
            <CarditemCT
              src={hinh}
              text="11/11/2003"
              p="Quy hoạch Khu đô thị Phú Mỹ Hưng của Đại Phú Mỹ nhận giải thưởng quốc tế tại Hoa Kỳ"
              label=""
              path="/"
            />
          </Link>
          <Link to="/chitietchuongtrinh" className="linkct">
            <CarditemCT
              src={hinh}
              text="11/11/2003"
              p="Quy hoạch Khu đô thị Phú Mỹ Hưng của Đại Phú Mỹ nhận giải thưởng quốc tế tại Hoa Kỳ"
              label=""
              path="/"
            />
          </Link>
          <Link to="/chitietchuongtrinh" className="linkct">
            <CarditemCT
              src={hinh}
              text="11/11/2003"
              p="Quy hoạch Khu đô thị Phú Mỹ Hưng của Đại Phú Mỹ nhận giải thưởng quốc tế tại Hoa Kỳ"
              label=""
              path="/"
            />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default chitietchuongtrinh;
