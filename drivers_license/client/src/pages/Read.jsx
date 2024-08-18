import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
    
    const [password] = useParams([])
    const [users, setUsers] = useState([])

    useEffect(() => {
                axios.get(`http://localhost:5000/getUsers/${password}`)
                    .then((user) => setUsers(user.data))
                    .catch((err) => console.log(err))
            }, [])

    return (
        <>
            
        </>
    )
}

export default Read;