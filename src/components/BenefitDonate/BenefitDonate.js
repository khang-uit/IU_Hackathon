import React from "react";
import img_block_1 from "../../img/block_1.png";
import img_block_2 from "../../img/block_2.png";
import img_block_3 from "../../img/block_3.png";
import img_block_4 from "../../img/block_4.png";
import img_block_5 from "../../img/block_5.png";
import img_block_6 from "../../img/block_6.png";
import "./BenefitDonate.scss";
import { Link } from "react-router-dom";
const BenefitDonate = () => {
  return (
    <div className="benefit-donate">
      <h1 className="benefit-donate-title">
        LỢI ÍCH KHI THAM GIA
      </h1>
      <div className="benefit-donate-row">
        <div className="benefit-donate-block">
          <img src={img_block_1} alt="" />
          <h4>Giúp Đỡ Cộng Đồng</h4>
          <p>
            Cùng chung tay nâng đỡ những hoàn cảnh bất hạnh, khó khăn. Lá lành
            đùm lá rách
          </p>
        </div>
        <div className="benefit-donate-block">
          <img src={img_block_2} alt="" />
          <h4>Quảng Bá Sản Phẩm</h4>
          <p>
            Tạo thêm danh tiếng cho sản phẩm, nhiều người biết đến hơn thông qua
            tính năng voucher
          </p>
        </div>
        <div className="benefit-donate-block">
          <img src={img_block_3} alt="" />
          <h4>Thu Hút Thêm Khách Hàng</h4>
          <p>
            Khách hàng dùng voucher mua hàng sẽ nhìn thấy thương hiệu của bạn và
            nếu có nhu cầu thì họ sẽ tìm hiểu và mua sản phẩm của bạn.
          </p>
        </div>
      </div>
      <div className="benefit-donate-row">
        <div className="benefit-donate-block">
          <img src={img_block_5} alt="" />
          <h4>Đề Xuất Trên Trang Của Chúng Tôi</h4>
          <p>
            Chúng tôi sẽ tri ân mọi nhà tài trợ trên trang web để tôn vinh hành
            động vì mọi người
          </p>
        </div>
        <div className="benefit-donate-block">
          <img src={img_block_6} alt="" />
          <h4>Tăng Thêm Hạnh Phúc Và Cảm Giác Hài Lòng </h4>
          <p>
            Việc cho đi sẽ khiến chúng ta hạnh phúc hơn và đồng thời tăng thêm
            tín nhiệm đối với những nhà tài trợ
          </p>
        </div>
        <div className="benefit-donate-block">
          <img src={img_block_4} alt="" />
          <h4>Tạo Thêm Cách Quảng Bá Sản Phẩm Mới</h4>
          <p>
            Tài trợ cho mục đích từ thiện đồng thời là 1 cách quảng bá mới nhưng
            lại không gây khó chịu mà còn đem lại sự tôn trọng cho những đối
            tượng cần quảng bá.
          </p>
        </div>
      </div>
      <button>
        <Link to="/donors">Tham gia tài trợ</Link>
      </button>
    </div>
  );
};
export default BenefitDonate;
