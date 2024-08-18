import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [serverMes, setServerMes] = useState('');
    const navigate = useNavigate()

    const hendelSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/login', {
            email,
            password
        })
            .then(result => {
                console.log(result)
                if(result.data === "Sucsses") {
                    navigate("/license")
                }
                else{
                    setServerMes(result.data)
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={hendelSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder=" ENTER EMAIL"
                            autoCapitalize="off"
                            name="email"
                            className="from-control rouded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="Password"
                            placeholder=" ENTER PASSWORD"
                            name="password"
                            className="from-control rouded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>{serverMes}</div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>

                <p>Dont Have an Account</p>
                <Link to="/" className="btn btn-default border w-100 bg-lifht rounded-0 text-decoration-none">
                    LogUp
                </Link>

            </div>
        </div>
    )
}
