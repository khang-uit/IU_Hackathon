import React, {useState, useEffect} from "react";
import "./Receiver.scss";
import { Link } from "react-router-dom";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import { CorruptPageTreeError } from "pdf-lib";
import { GoTextSize } from "react-icons/go";
import axios from "axios";

const Receiver = () => {
  const [receivers, setReceivers] = useState([]);
  let token = localStorage.getItem("token");

  useEffect(() => {
    const getReceivers = async () => {
        if (token === null) {
            localStorage.setItem("token", "");
            token = "";
        }
        if (token) {
            const receiversResponse = await axios.get(
                `https://khoi-hi-vong.herokuapp.com/api/user/all-receiver`,
                {
                    headers: {
                        authorization: token,
                    }
                }
            );
            setReceivers(receiversResponse.data.receivers);
        }
    }
    getReceivers();
  }, []);

  return (
    <div className="receiver">
      <h1 className="receiver-title">
        HOÀN CẢNH KHÓ KHĂN
      </h1>
      <div className="receiver-row">
      {receivers?.length > 0 ? (
          receivers.map((receiver, index) => {
            if(index > 2){
              return;
            }
            return (
              <div className="receiver-block">
                <div className="receiver-block-img">
                  <img src={receiver.image} alt="" />
                  <div className="receiver-block-img-details">
                    <div className="receiver-block-img-details-total">
                      <h3>{receiver.max_money}</h3>
                      <p>Tổng tiền</p>
                    </div>
                    <div className="receiver-block-img-details-chart">
                    <CircularProgressbar
                      value= {receiver.current_money/receiver.max_money*100}
                      text={`${receiver.current_money/receiver.max_money*100}%`}background
                      backgroundPadding={6}
                      styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        textSize: '28px'
                      })}
                    />
                    </div>
                  </div>
                </div>
                <div className="receiver-block-describe">
                  <div className="receiver-block-describe-content">
                    <h4>{receiver.title}</h4>
                    <p>
                      {receiver.content}
                    </p>
                  </div>

                  <div className="receiver-block-describe-btn">
                    <button>
                     <Link to={`receiver/${receiver._id}`}>Quyên góp</Link>
                    </button>
                  </div>

                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      <button className="more-details">
        <Link to="/receiver">
          Xem Thêm
        </Link>
      </button>
    </div>
  );
};
export default Receiver;
