import React, {useState, useEffect} from "react";
import "./ReceiverList.scss";
import { Link } from "react-router-dom";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import { CorruptPageTreeError } from "pdf-lib";
import { GoTextSize } from "react-icons/go";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const ReceiverList = () => {
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
    <div>
      <Navbar />
      <div className="receiver-list">
        <h1 className="receiver-list-title">
          HOÀN CẢNH KHÓ KHĂN
        </h1>
        <div className="receiver-list-row">
        {receivers?.length > 0 ? (
            receivers.map((receiver) => {
              return (
                <div className="receiver-list-block">
                  <div className="receiver-list-block-img">
                    <img src="https://vnn-imgs-f.vgcloud.vn/2022/02/24/10/nu-sinh-mo-coi-cha-mac-benh-hiem-ngheo-suot-9-nam-dang-nguy-kich-tinh-mang.jpg" alt="" />
                    <div className="receiver-list-block-img-details">
                      <div className="receiver-list-block-img-details-total">
                        <h3>{receiver.max_money}</h3>
                        <p>Tổng tiền</p>
                      </div>
                      <div className="receiver-list-block-img-details-chart">
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
                  <div className="receiver-list-block-describe">
                    <div className="receiver-list-block-describe-content">
                      <h4>{receiver.title}</h4>
                      <p>
                        {receiver.content}
                      </p>
                    </div>
                    <div className="receiver-list-block-describe-btn">
                      <button>
                      <Link to={`/receiver/${receiver._id}`}>Quyên góp</Link>
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
      </div>
    </div>
  );
};
export default ReceiverList;
