import {useEffect, useState} from 'react'
import axios from 'axios'
export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
  axios({
url: 'http://localhost:8081/users',
method: 'GET'
  }).then((res) => {    
    setUsers(res.data)
  })
  }
  , [])
  function handleSearch(qiymat) {
axios({
  url: `http://localhost:8081/users?username_like=${qiymat}`,
  method: 'GET'
}).then((res) => {
 console.log(res.data);
 setUsers(res.data)
})
  }
 return(
    <div>
      <input onChange={(event)=>handleSearch(event.target.value)} className='form-control w-25' type="search" placeholder='search title.....' />
   <table className='table'>
    <thead className='table-dark'>
      <tr>
        <th>id</th>
        <th>username</th>
        <th>email</th>
        <th>phone</th>
        <th>more</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
{
users.map((item: any) => (
<tr key={item.id}>
  <td>{item.id}</td>
<td>{item.username}</td>
<td>{item.email}</td>
<td>{item.phone}</td>
<td>batafsil</td>
<td>
  <button>todos</button>
  <button>posts</button>
</td>

</tr>
))
}
    </tbody>
   </table>
    </div>
  )
}
