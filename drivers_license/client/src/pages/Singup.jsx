import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"


export default function SingUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const hendelSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/register',{
            name,
            email,
            password
        })
        .then(result => {console.log(result)
        navigate("/login")
        })
        .catch(err=> console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={hendelSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder=" ENTER NAME"
                            autoCapitalize="off"
                            name="email"
                            className="from-control rouded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>

                <p>Already Have an Account</p>
                <Link to="/login" className="btn btn-default border w-100 bg-lifht rounded-0 text-decoration-none">
                    Login
                </Link>

            </div>
        </div>
    );
}

