import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from 'react-router-dom';
import "./Receiver.scss";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link, Route } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const initialFormData = {
    amount: 0
};

const initialReceiverData = {
    title: "",
    content: "",
    max_money: 0
}


const Receiver = () => {
    const [open, setOpen] = React.useState(false);
    const [formReqData, setFormReqData] = useState(initialFormData);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { id } = useParams();
    let token = localStorage.getItem("token");
    const [receiver, setReceiver] = useState({});
    const [blockChain, setBlockChain] = useState([]);

    useEffect(() => {
        const checkLoggedIn = async () => {
            if (token === null) {
                localStorage.setItem("token", "");
                token = "";
            }
            if (token) {
                const userResponse = await axios.get(
                    `https://khoi-hi-vong.herokuapp.com/api/user/donation/${id}`,
                    {
                        headers: {
                            authorization: token,
                        }
                    }
                );
                setBlockChain(userResponse.data.blockChain);
            }
        };

        const getReceiver = async () => {
            if (token === null) {
                localStorage.setItem("token", "");
                token = "";
            }
            if (token) {
                const userResponse = await axios.get(
                    `https://khoi-hi-vong.herokuapp.com/api/user/receiver/${id}`,
                    {
                        headers: {
                            authorization: token,
                        }
                    }
                );
                setReceiver(userResponse.data.receiver);
            }
        }

        checkLoggedIn();
        getReceiver();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormReqData({
            ...formReqData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (token) {
                const res = await axios.post(
                    "https://khoi-hi-vong.herokuapp.com/api/user/donation",
                    {
                        receiverId: id,
                        amount: formReqData.amount
                    },
                    {
                        headers: {
                            authorization: token,
                        },
                    }
                );
                alert(res.data.message);
                setFormReqData({
                    amount: 0,
                });
            }
        } catch (err) {
            alert(err.response.data.message);
            console.log(err);
        }
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className="header">
                    <img className="hero-image" src={receiver.image}/>
                    <div className="funding container">
                        <div className="funding-card">
                            <div className="funding-header">
                                <h2 className="funding-title">
                                    {receiver?.title}
                                </h2>
                                <h3 className="funding-status" style={{color: receiver?.status == 'DANG GAY QUY' ? 'tomato' : (receiver?.status == 'DAT CHI TIEU' ? '#01BFDE' : '#45945d')}}>
                                    {receiver?.status}
                                </h3>
                            </div>
                            <ProgressBar
                                completed={100*receiver?.current_money/receiver?.max_money}
                                margin="auto"
                                className="bar-wrapper"
                                barContainerClassName="bar-container"
                                completedClassName="bar-barCompleted"
                                labelClassName="bar-label"
                                bgColor="#01BFDE"
                            />
                            <div className="funding-money">
                                <h6 className="funding-p">{receiver.current_money}</h6> <p className="funding-p"> {`đã được quyên góp trên tổng số ${receiver.max_money}`}</p>
                            </div>
                            <button className="funding-button" onClick={handleOpen}>
                                Quyên góp
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="history-donation-header">
                    <h3 className="history-donation-title">Danh sách quyên góp</h3>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Số tiền</th>
                            <th>Ngày</th>
                            <th>Chi tiết giao dịch</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blockChain.length > 0 ? (
                            blockChain.map((block, index) => {
                                console.log(block._id);
                                return (
                                    <tr>
                                        <td>
                                            {block.transaction.from.fullname}
                                        </td>
                                        <td>
                                            {block.transaction.amount}
                                        </td>
                                        <td>
                                            {block.transaction.timestamp}
                                        </td>
                                        <td>
                                            <Link to={`/transaction/${block._id}`} className="transaction_alo">Transaction</Link>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <div></div>
                        )}
                    </tbody>
                </table>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField fullWidth value={formReqData.amount} id="outlined-number"
                        label="Số tiền"
                        type="number"
                        name="amount"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange}
                    />
                    <button className="donate-button" onClick={handleSubmit}>
                        Quyên góp
                    </button>
                </Box>
            </Modal>
        </div>

    );
};
export default Receiver;
