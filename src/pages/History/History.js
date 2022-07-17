import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./History.scss";
const initialFormData = {};

const History = () => {
    const [history, setHistory] = useState(initialFormData);
    const token = window.localStorage.getItem("token");
    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("token");
            if (token === null) {
                localStorage.setItem("token", "");
                token = "";
            }
            if (token) {
                const userResponse = await axios.get(
                    "https://khoi-hi-vong.herokuapp.com/api/user/history",
                    {
                        headers: {
                            authorization: token,
                        },
                    }
                );
                setHistory(userResponse.data.history);
            }
        };

        checkLoggedIn();
    }, []);

    return (
        <>
            <Navbar />
            <div className="history-donation-header">
                <h1 className="history-donation-title">Lịch sử quyên góp</h1>
            </div>
            <div className="history-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Hoàn cảnh</th>
                            <th>Số tiền</th>
                            <th>Ngày</th>
                            <th>Chi tiết giao dịch</th>
                        </tr>
                    </thead>
                    {history.length > 0 ? (
                        history.reverse().map((item) => {
                            return (
                                <tr>
                                    <td>
                                        {item.transaction.to.title}
                                    </td>
                                    <td>
                                        {item.transaction.amount}
                                    </td>
                                    <td>
                                        {item.transaction.timestamp}
                                    </td>
                                    <td>
                                        <Link to={`/transaction/${item._id}`} className="transaction">Transaction</Link>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <div></div>
                    )}
                </table>
            </div>
        </>
    );
};
export default History;
