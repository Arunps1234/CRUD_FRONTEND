import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Edit = () => {

    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [Email, setEmail] = useState("")
    const [Phonenumber, setPhonenumber] = useState("")
    const Submit = () => {

    }

    const { id } = useParams();
    const navigate = useNavigate()

    function navigatehomepage (event) {
        navigate("/", {replace:true})
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/singleuser/${id}`).then(res => {
            setFirstname(res.data.Firstname);
            setLastname(res.data.Lastname);
            setEmail(res.data.Email);
            setPhonenumber(res.data.Phonenumber)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    const data = {
        Firstname: Firstname,
        Lastname: Lastname,
        Email: Email,
        Phonenumber: Phonenumber
    }


    const goback = () => {
        navigate(-1)
    }


    const Update = () => {
        axios.put(`http://localhost:5000/edit/${id}`, data).then(res => {
            navigatehomepage()
            
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>

            <div className="forms" >

                <div>
                    <button style={{ float: "left", background: "green", border: "none", marginBottom: "10px" }} onClick={goback}>Back</button>
                </div>

                <form className="form-group" style={{ width: "50vw" }} onSubmit={Submit}>

                    <input type="text" placeholder="Enter Firstname" value={Firstname} onChange={(e) => setFirstname(e.target.value)} className="form-control" />
                    <br />
                    <input type="text" placeholder="Enter Lastname" value={Lastname} onChange={(e) => setLastname(e.target.value)} className="form-control" />
                    <br />
                    <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="form-control" />
                    <br />
                    <input type="text" value={Phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Enter Phonenumber" className="form-control" />
                    <br />
                    <button className="btn btn-success" style={{ width: "100%" }} onClick={Update}>Update</button>

                </form>

            </div>

        </div>
    )
}

export default Edit