import { AuthContext } from "../../context/AuthContext";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

const Login = () => {
	const [credentials, setCredentials] = useState({
		// username: "ngu123",
		// password: "12345",
		username: "",
		password: "",
	});

	const { loading, error, dispatch } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleChange = (e) => {
		// setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));

		setCredentials((prev) => {
			console.log({ ...prev, [e.target.id]: e.target.value });
			return { ...prev, [e.target.id]: e.target.value };
		});
	};

	const handleClick = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			console.log(credentials);
			const res = await axios.post(
				"http://localhost:8000/api/auth/login",
				credentials
			);
			console.log(res);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
			navigate("/");
		} catch (err) {
			console.log(err);
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};

	return (
		<>
			<div className="auth-form-container">
				<h2>Login</h2>
				<form className="login-form">
					<input
						// type="email"
						// id="email"
						// name="email"
						type="text"
						id="username"
						name="username"
						onChange={handleChange}
						placeholder="Username"
						className="form-control my-2"
					/>
					<input
						type="password"
						id="password"
						ame="password"
						onChange={handleChange}
						placeholder="Password"
						className="form-control my-2"
					/>
					<button
						disabled={loading}
						onClick={handleClick}
						type="submit"
						className="btn btn-light my-2"
					>
						Log In
					</button>
					{error && <span>{error.message}</span>}
				</form>
				<Link className="link-btn text-light my-2" to="/register">
					Don't have an account? Register here.
				</Link>
			</div>
		</>
	);
};

export default Login;
