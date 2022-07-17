import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./OurStory.scss";
const OurStory = () => {
  return (
    <>
      <Navbar />
      <div className="our-story">
        <div className="our-story-content">
          <h1>Câu Chuyện Của Chúng Tôi</h1>
          <p>
            -   Thông qua IU Hackathon, nhóm của chúng tôi "Khối Hy Vọng", đã
            luôn luôn tìm cách để giúp cho cộng đồng, thương người như thể
            thương thân tạo ra một nơi có thể chia sẻ không những về vật chất mà
            còn là cảm xúc tích cực, đem lại những nụ cười cho những hoàn cảnh
            kém may mắn.
          </p>
          <p>
            -   Hãy cùng tiếp nối với chúng tôi Không những làm việc thiện giúp tâm
            trạng của bạn tốt hơn mà ta còn được những phần thưởng của sự tử tế.
          </p>
          <p>Cho đi và nhận lại</p>
          <p>
            -   Cho đi và nhận lại Chúng ta sống phụ thuộc vào nhau, làm ra sản phẩm
            để hỗ trợ cho nhau, cũng vì lẽ đó chúng tôi cúng ao ước một nơi mà
            bạn có thể chia sẻ được những sản phẩm mà người khác cần với mức giá
            tốt hơn thị trường.
          </p>
          <p className="slogan">Hạnh phúc đơn giản là sự sẻ chia</p>
        </div>
      </div>
    </>
  );
};
export default OurStory;
