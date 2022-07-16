import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Transaction.scss";
import axios from "axios";

const Transaction = () => {
    return (
        <>
            <Navbar />
            <h1 className="transaction-title">
                Transaction
            </h1>
            
        </>
    );
};
export default Transaction;
