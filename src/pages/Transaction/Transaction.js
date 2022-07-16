import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Transaction.scss";
import axios from "axios";

const Transaction = () => {
    const { id } = useParams();
    const [transaction, setTransaction] = useState({});
    let token = localStorage.getItem("token");

    useEffect(() => {
        const getBlock = async () => {
            if (token === null) {
                localStorage.setItem("token", "");
                token = "";
            }
            if (token) {
                const userResponse = await axios.get(
                    `https://khoi-hi-vong.herokuapp.com/api/user/block/${id}`,
                    {
                        headers: {
                            authorization: token,
                        }
                    }
                );
                setTransaction(userResponse.data.block);
            }
        }

        getBlock();
    }, []);

    return (
        <>
            <Navbar />
            <h1 className="transaction-title">
                Transaction
            </h1>
            <div className="">
                <div className=" transaction-table">
                    <div className="transaction-table-row">
                        <div className="transaction-table-row-key">
                            Hash:
                        </div>
                        <div className="transaction-table-row-value">
                            {transaction?.hash} 
                        </div>
                    </div>
                    <hr></hr>
                    <div className="transaction-table-row">
                        <div className="transaction-table-row-key">
                            Trạng thái:
                        </div>
                        <div className="transaction-table-row-value">
                            Thành công
                        </div>
                    </div>
                    <hr></hr>
                    <div className="transaction-table-row">
                        <div className="transaction-table-row-key">
                            Block:
                        </div>
                        <div className="transaction-table-row-value">
                            {transaction?._id} 
                        </div>
                    </div>
                    <hr></hr>
                    <div className="transaction-table-row">
                        <div className="transaction-table-row-key">
                            Từ:
                        </div>
                        <div className="transaction-table-row-value">
                            {transaction?.transactionId?.from?._id} ( {transaction?.transactionId?.from?.fullname} )
                        </div>
                    </div>
                    <hr></hr>
                    <div className="transaction-table-row">
                        <div className="transaction-table-row-key">
                            Đến:
                        </div>
                        <div className="transaction-table-row-value">
                            {transaction?.transactionId?.to?._id}
                        </div>
                    </div>
                    <hr></hr>
                    <div className="transaction-table-row">
                        <div className="transaction-table-row-key">
                            Số tiền:
                        </div>
                        <div className="transaction-table-row-value">
                            {transaction?.transactionId?.amount}
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </div>
        </>
    );
};
export default Transaction;
