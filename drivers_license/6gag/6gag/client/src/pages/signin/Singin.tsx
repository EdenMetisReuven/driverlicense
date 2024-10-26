import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import './signin.css'


export default function SingUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const hendelSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/user/logup',{
            name,
            email,
            password
        })
        .then(result => {console.log(result)
        navigate("/newPost")
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="logup-box">
            <div className="inputs-logup">

                <h2>Register</h2>
                    <div className="input">
                        <input
                            type="text"
                            placeholder=" ENTER NAME"
                            autoCapitalize="off"
                            name="email"
                            className="input-logup"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="email"
                            placeholder=" ENTER EMAIL"
                            autoCapitalize="off"
                            name="email"
                            className="input-logup"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="Password"
                            placeholder=" ENTER PASSWORD"
                            name="password"
                            className="input-logup"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="button" onClick={hendelSubmit} className="logup-btn">
                        Register
                    </button>
                </div>
                <div className="box-2">
                <p>Already Have an Account</p>
                <Link to="/login" className="login-link">
                    Login
                </Link>

            </div>
        </div>
    );
}

