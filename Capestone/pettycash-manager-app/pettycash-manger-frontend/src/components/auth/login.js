import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { host } from "../../config"

const Login = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/");
        }
    }, [navigate]);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

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

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = values;

        setLoading(true);

        const { data } = await axios.post(`${host}/api/auth/login`, {
            email,
            password,
        });

        if (data.success === true) {
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/");
            toast.success(data.message, toastOptions);
            setLoading(false);
        } else {
            toast.error(data.message, toastOptions);
            setLoading(false);
        }
    };

    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            <Container
                className="mt-5"
                style={{ position: "relative", zIndex: "2 !important" }}
            >
                <Row>
                    <h1 className="text-center">
                        <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "#0d6efd" }} className="text-center" />
                    </h1>
                    <h1 className="text-center" style={{ color: '#0d6efd' }}>Welcome to PettyCash Manager</h1>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h2 className="text-black text-center mt-5" >Login</h2>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="mt-3">
                                <Form.Label className="text-black">Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mt-3">
                                <Form.Label className="text-black">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    value={values.password}
                                />
                            </Form.Group>
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}
                                className="mt-4"
                            >
                                <Button
                                    type="submit"
                                    className=" text-center mt-3 btnStyle"
                                    onClick={!loading ? handleSubmit : null}
                                    disabled={loading}
                                >
                                    {loading ? "Signin…" : "Login"}
                                </Button>

                                <p className="mt-3" style={{ color: "#9d9494" }}>
                                    Don't Have an Account?{" "}
                                    <Link to="/register" className="text-black lnk">
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </div>
    );
};

export default Login;
