import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./new-post.css"
import axios from "axios"


export default function NewPost() {

    const [lable, setlable] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate()

    const hendelSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("lable", lable)
        formData.append("image", image)
        formData.append("description", description)
        axios.post('http://localhost:5000/post/logup', formData)
            .then(result => {
                console.log(result)
                navigate("/home")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="new-post-box">
            <h2>New Post</h2>
            <div className="inputs-post">
                <div className="input">
                    <input
                        type="text"
                        placeholder=" ENTER LABLE"
                        autoCapitalize="off"
                        name="lable"
                        className="input-post"
                        onChange={(e) => setlable(e.target.value)}
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        placeholder=" ENTER DESCRIPTION"
                        name="description"
                        className="input-post"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </div>
            <div className="box-image">
                <div className="input">
                    <input
                        type="file"
                        autoCapitalize="off"
                        name="image"
                        className="input-box"
                        
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            setImage(file)}
                            }
                    />
                    
                </div>
            </div>
            {/* {image && (<image
                    src={image}
                    width={1000}
                    height={1000}
                    alt="Selected avatar"
                    className="maxh-[400px] object-contain"

                    />)} */}
            <button type="button" onClick={hendelSubmit} className="logup-btn">
                Register
            </button>
        </div>
    );
}
