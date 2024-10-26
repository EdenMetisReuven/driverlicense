import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function HomrPage() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/post')
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
                  <td>{user.lable}</td>
                  <td><video width={300} height={300} controls>
                  <source src={user.image} type='video/mp4' />
                    </video></td>
                  <td>{user.description}</td>
                </tr>
              )})
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HomrPage;