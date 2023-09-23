import React ,  {useState, useEffect}  from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import "./read.css"
import { useNavigate } from 'react-router-dom'


const Read = () =>{
    const [data, setdata] = useState([])
    const [showpop, setshowpop] = useState(false)
const [ userid, setUserid] = useState()
const [username, setUsername] = useState()

const navigate = useNavigate();





    useEffect(()=>{
        axios.get("http://localhost:5000/getusers").then(res=>{
            setdata(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])






    const deleteuser = (id, name) =>{
        setshowpop(true)
       setUserid(id)
       setUsername(name)
    
        


    }


    const closePopup = () =>{
        setshowpop(false)
    }

    const Deletes = () =>{
        axios.delete(`http://localhost:5000/delete/${userid}`).then(res=>{
            console.log(res)
            setshowpop(false)
            window.location.reload()
        }).catch(err=>{
            console.log(err)
        })
    }

    const EditDetails = (id) => {
        navigate(`/Edit/${id}`)
    }
    
    return(
        <div>
            <div>
                <Link to="/create">
                <button className='btn btn-success' style={{float:"right", margin:"20px"}}>Create</button>
           </Link>
            </div>
<table className='table'>
<thead>
<tr>
    <th>SL NO</th>
    <th>Profile</th>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Email</th>
    <th>Phonenumber</th>
    <th>Actions</th>

</tr>
</thead>

<tbody>
    { data.length>0 ? 
        data.map((val, i)=>(
            <tr key={val._id}>
                <td>{i+1}</td>
                <td  >{val.Firstname.charAt(0)}{val.Lastname.charAt(0)}</td>
                <td>{val.Firstname}</td>
                <td>{val.Lastname}</td>
                <td>{val.Email.toLowerCase()}</td>
                <td>{val.Phonenumber}</td>
                <td>
                    <button className='btn btn-warning' onClick={()=>EditDetails(val._id)}>Edit</button>
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=>deleteuser(val._id, val.Firstname)}>Delete</button>
                </td>
            </tr>
        ))

        :
        <div className='nodatatext'>


        <h6 > NO DATA FOUND</h6> 
        </div>
    }


</tbody>


</table>

{
 showpop &&
<div className='delpopup'>
<h4 className='msgtext'>Are You Sure Want to delete {username} ?</h4>
<div className='closeicon' onClick={closePopup}>X</div>
<div className='btns'>
&nbsp;&nbsp; &nbsp;
&nbsp;&nbsp; &nbsp;

<div className='btn btn-danger' style={{width:"200px"}}  onClick={Deletes}>Yes</div>
&nbsp;&nbsp; &nbsp;
<div className='btn btn-success' style={{width:"200px"}}  onClick={()=>setshowpop(false)}>No</div>
</div>
</div>

}


        </div>


    )
}

export default Read;