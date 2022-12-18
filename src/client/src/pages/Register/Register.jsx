import "./register.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
	const [firstName, setFirstName] = useState(undefined);
	const [lastName, setLastName] = useState(undefined);
	const [username, setusername] = useState(undefined);
	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);
	const [confirmPwd, setConfirmPwd] = useState(undefined);

	const [success, setSuccess] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			console.log({ firstName, lastName, username, email, password });
			const res = await axios.post(
				"http://localhost:8000/api/auth/register",
				{ firstName, lastName, username, email, password }
			);
			console.log(res);
			setSuccess(true);
		} catch (err) {
			console.log({ firstName, lastName, username, email, password });
		}
	};
	return (
		<>
			{success ? (
				<section>
					<h1>Success!</h1>
					<p>
						<Link to="/login">Sign In</Link>
					</p>
				</section>
			) : (
				<div className="over">
					<h2 className="Title">Sign Up</h2>
					<form>
						<input
							type="text"
							id="firstName"
							name="firstName"
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="First Name"
						/>
						<p></p>
						<input
							type="text"
							id="lastName"
							name="lastName"
							onChange={(e) => setLastName(e.target.value)}
							placeholder="Last Name"
						/>
						<p></p>
						<input
							type="text"
							id="username"
							name="username"
							onChange={(e) => setusername(e.target.value)}
							placeholder="Username"
						/>
						<p></p>
						<input
							type="email"
							id="email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
						/>
						<p></p>
						<input
							type="password"
							id="password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Password"
						/>
						<p></p>
						<input
							type="password"
							id="confirm-password"
							name="confirm-password"
							onChange={(e) => setConfirmPwd(e.target.value)}
							placeholder="Confirm password"
						/>
						<p></p>
						<button onClick={handleSubmit} className="btn">
							Submit
						</button>
					</form>
				</div>
			)}
		</>
	);
};

export default Register;
