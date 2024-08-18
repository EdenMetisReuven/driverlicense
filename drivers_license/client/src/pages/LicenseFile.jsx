import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function LicenseFile() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/getUsers')
      .then((user) => setUsers(user.data))
      .catch((err) => console.log(err))
  }, [])


  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-50'>
        <table className='table'>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return (
                <tr> 
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><Link to={`/read/${user.password}`} className="btn btn-default border w-50 bg-lifht rounded-0 text-decoration-none">
                    More Info
                </Link></td>
                </tr>
              )})
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LicenseFile;