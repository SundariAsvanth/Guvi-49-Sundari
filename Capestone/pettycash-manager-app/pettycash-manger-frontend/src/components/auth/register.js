import { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./auth.css";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { host } from "../../config"

const Register = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);

    const [values, setValues] = useState({
        name: "",
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
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = values;

        setLoading(false);

        const { data } = await axios.post(`${host}/api/auth/register`, {
            name,
            email,
            password
        });

        if (data.success === true) {
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("user", JSON.stringify(data.user));
            toast.success(data.message, toastOptions);
            setLoading(true);
            navigate("/");
        }
        else {
            toast.error(data.message, toastOptions);
            setLoading(false);
        }
    };

    return (
        <>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <Container className="mt-5" style={{ position: 'relative', zIndex: "2 !important", color: "black !important" }}>
                    <Row>
                        <h1 className="text-center">
                            <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "#0d6efd" }} className="text-center" />
                        </h1>
                        <h1 className="text-center" style={{ color: '#0d6efd' }}>Welcome to PettyCash Manager</h1>
                        <Col md={{ span: 6, offset: 3 }}>
                            <h2 className="text-black text-center mt-5" >Registration</h2>
                            <Form>
                                <Form.Group controlId="formBasicName" className="mt-3" >
                                    <Form.Label className="text-black">Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Full name" value={values.name} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="mt-3">
                                    <Form.Label className="text-black">Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" value={values.email} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mt-3">
                                    <Form.Label className="text-black">Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
                                </Form.Group>
                                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} className="mt-4">

                                    <Button
                                        type="submit"
                                        className=" text-center mt-3 btnStyle"
                                        onClick={!loading ? handleSubmit : null}
                                        disabled={loading}
                                    >
                                        {loading ? "Registering..." : "Signup"}
                                    </Button>

                                    <p className="mt-3" style={{ color: "#9d9494" }}>Already have an account? <Link to="/login" className="text-black lnk" >Login</Link></p>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                    <ToastContainer />
                </Container>
            </div>
        </>
    )
}

export default Register