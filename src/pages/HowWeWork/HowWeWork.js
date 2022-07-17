import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import description_work from "../../img/description.png";
import "./HowWeWork.scss";
const HowWeWork = () => {
  return (
    <>
      <Navbar />
      <div className="how-we-work">
        <div className="how-we-work-content">
          <h1>Khối Hy Vọng</h1>
          <p>
            "Khối Hy Vọng" giúp bạn từ thiện thông qua tiền mặt
            mà bạn muốn cho đi khiến chúng có thể làm ấm được một cuộc đời khác.
            Thông qua hành động vì mọi người của bạn, bạn sẽ nhận được điểm để đổi
            voucher từ những nhà tài trợ. Giúp bạn có thể sắm thêm những
            sản phẩm bạn cần với giá cả tốt hơn thị trường.
          </p>
          <h1>Cách Chúng Tôi Hoạt Động</h1>
          <ul>
            <li>
              1. Tới mục từ thiện, điền vào thông tin và chọn cach từ thiện
            </li>
            <li>
              2. Khi từ thiện hoàn thành bạn nhận điểm share thông tin để những
              nhà hảo tâm khác biết về trang web cũng như hành động san sẻ của
              bạn đồng thời nhận thêm điểm
            </li>
            <li>3. Chọn voucher ở mục voucher mà bạn muốn</li>
            <li>4. Mua hàng với giá tốt từ nhà tài trợ</li>
            <li>5. Cảm thấy hạnh phúc và tiếp thêm năng lượng tích cực</li>
          </ul>
          <p className="slogan">Hãy sống để sẻ chia</p>
        </div>
        <div className="how-we-work-img">
          <img src={description_work} alt="" />
        </div>
      </div>
    </>
  );
};
export default HowWeWork;
