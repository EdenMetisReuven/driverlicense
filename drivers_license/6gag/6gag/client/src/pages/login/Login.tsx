import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import './login.css'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [serverMes, setServerMes] = useState('');
    const navigate = useNavigate()

    const hendelSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/user/login', {
            email,
            password
        })
            .then(result => {
                console.log(result)
                if(result.data === "Sucsses") {
                    navigate("/home")
                }
                else{
                    setServerMes(result.data)
                }

            })
            .catch(err => {
                console.log(err)
                setServerMes("loading")
            })
    }

    return (
        <div className="login-box">
            <div className="inputs-login">
                <h2>Login</h2>
                <div>
                    <div className="input">
                        <input
                            type="email"
                            placeholder=" Enter Email"
                            autoCapitalize="off"
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-login"
                        />
                    </div>
                    <div className="input">
                        <input
                            type="Password"
                            placeholder=" Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-login"
                        />
                    </div>
                    <div>{serverMes}</div>
                    <button type="button" onClick={hendelSubmit } className="login-btn">
                        Login
                    </button>
                </div>
                </div>
                <div className="box-2">
                <p>Dont Have an Account ? </p>
                <Link to="/" className="logup-link">
                     Log Up
                </Link>

            </div>
        </div>
    )
}
