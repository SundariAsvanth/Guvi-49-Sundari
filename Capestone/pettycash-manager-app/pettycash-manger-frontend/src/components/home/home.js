import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Form, Container } from "react-bootstrap";
import "./home.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import BarChartIcon from "@mui/icons-material/BarChart";
import Spinner from "./spinner";
import TableData from "./transactionsList";
import Header from "../header/header";
import Analytics from "../analytics/analytics";
import { host } from "../../config"

const Home = () => {
    const navigate = useNavigate();

    const toastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    };
    const [cUser, setcUser] = useState({});
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [type, setType] = useState("All");
    const [view, setView] = useState("table");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const userFunc = async () => {
            if (localStorage.getItem("token")) {
                const user = JSON.parse(localStorage.getItem("user"));
                setcUser(user);
                setRefresh(true);
            } else {
                navigate("/login");
            }
        };

        userFunc();
    }, [navigate]);

    const defaultValues = {
        title: "",
        amount: "",
        description: "",
        category: "",
        date: "",
        transactionType: "",

    }
    const [values, setValues] = useState(defaultValues);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSetType = (e) => {
        setType(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { title, amount, description, category, date, transactionType } =
            values;

        if (
            !title ||
            !amount ||
            !category ||
            !date ||
            !transactionType
        ) {
            toast.error("Please enter all the required (*) fields", toastOptions);
        }
        setLoading(true);

        const { data } = await axios.post(`${host}/api/v1/addTransaction`, {
            title: title,
            amount: amount,
            description: description,
            category: category,
            date: date,
            transactionType: transactionType,
            userId: cUser._id,
        });

        if (data.success === true) {
            toast.success(data.message, toastOptions);
            handleClose();
            setRefresh(!refresh);
        } else {
            toast.error(data.message, toastOptions);
        }

        setValues(defaultValues);

        setLoading(false);
    };

    const handleReset = () => {
        setType("All");
    };

    useEffect(() => {

        const fetchAllTransactions = async () => {
            try {
                setLoading(true);
                const { data } = await axios.post(`${host}/api/v1/getTransaction`, {
                    userId: cUser._id,
                    type: type,
                });

                setTransactions(data.transactions);

                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchAllTransactions();
    }, [refresh, type]);

    const handleTableClick = (e) => {
        setView("table");
    };

    const handleChartClick = (e) => {
        setView("chart");
    };

    return (
        <>
            <Header />

            {loading ? (
                <>
                    <Spinner />
                </>
            ) : (
                <>
                    <Container
                        style={{ position: "relative", zIndex: "2 !important" }}
                        className="mt-3"
                    >
                        <div className="filterRow">
                            <div className="text-black type">
                                <Form.Group className="mb-3" controlId="formSelectFrequency">
                                    <Form.Label>Type</Form.Label>
                                    <Form.Select
                                        name="type"
                                        value={type}
                                        onChange={handleSetType}
                                    >
                                        <option value="All">All</option>
                                        <option value="Income">Income</option>
                                        <option value="Expense">Expense</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>

                            <div className="text-black iconBtnBox">
                                <FormatListBulletedIcon
                                    sx={{ cursor: "pointer" }}
                                    onClick={handleTableClick}
                                    className={`${view === "table" ? "iconActive" : "iconDeactive"
                                        }`}
                                />
                                <BarChartIcon
                                    sx={{ cursor: "pointer" }}
                                    onClick={handleChartClick}
                                    className={`${view === "chart" ? "iconActive" : "iconDeactive"
                                        }`}
                                />
                            </div>

                            <div>
                                <Button onClick={handleShow} className="addNew">
                                    Add New
                                </Button>
                                <Button onClick={handleShow} className="mobileBtn">
                                    +
                                </Button>
                                <Modal show={show} onHide={handleClose} centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Transaction Details</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formName">
                                                <Form.Label>Title <span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Control
                                                    name="title"
                                                    type="text"
                                                    placeholder="Enter Transaction Name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formAmount">
                                                <Form.Label>Amount <span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Control
                                                    name="amount"
                                                    type="number"
                                                    placeholder="Enter your Amount"
                                                    value={values.amount}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formSelect">
                                                <Form.Label>Category <span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Select
                                                    name="category"
                                                    value={values.category}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Choose...</option>
                                                    <option value="Groceries">Groceries</option>
                                                    <option value="Rent">Rent</option>
                                                    <option value="Salary">Salary</option>
                                                    <option value="Tip">Tip</option>
                                                    <option value="Food">Food</option>
                                                    <option value="Medical">Medical</option>
                                                    <option value="Utilities">Utilities</option>
                                                    <option value="Entertainment">Entertainment</option>
                                                    <option value="Transportation">Transportation</option>
                                                    <option value="Other">Other</option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formDescription">
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="description"
                                                    placeholder="Enter Description"
                                                    value={values.description}
                                                    onChange={handleChange}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formSelect1">
                                                <Form.Label>Transaction Type <span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Select
                                                    name="transactionType"
                                                    value={values.transactionType}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Choose...</option>
                                                    <option value="Income">Income</option>
                                                    <option value="Expense">Expense</option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formDate">
                                                <Form.Label>Date <span style={{ color: "red" }}>*</span></Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    name="date"
                                                    value={values.date}
                                                    onChange={handleChange}
                                                    onKeyDown={(e) => e.preventDefault()}
                                                />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleSubmit}>
                                            Submit
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                        <br style={{ color: "black" }}></br>

                        <div className="containerBtn">
                            <Button variant="primary" onClick={handleReset}>
                                Reset Filter
                            </Button>
                        </div>
                        {view === "table" ? (
                            <>
                                <TableData data={transactions} user={cUser} />
                            </>
                        ) : (
                            <>
                                <Analytics transactions={transactions} user={cUser} />
                            </>
                        )}
                        <ToastContainer />
                    </Container>
                </>
            )}
        </>
    );
};

export default Home;
