import React, { useState } from "react"
import "./create.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Create = () => {
    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [Email, setEmail] = useState("")
    const [Phonenumber, setPhonenumber] = useState("")

    const navigate = useNavigate()

    const userdetails = {
        Firstname: Firstname,
        Lastname: Lastname,
        Email: Email,
        Phonenumber: Phonenumber
    }

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/create", userdetails).then(res => {
            alert("Data submitted sucessfully");

            navigate("/")
        }).catch(err => {
            console.log(err)
        })

        console.log(userdetails)
    }
    return (
        <div className="forms" >

            <form className="form-group" style={{ width: "50vw" }} onSubmit={Submit}>

                <input type="text" placeholder="Enter Firstname" value={Firstname} onChange={(e) => setFirstname(e.target.value)} className="form-control" />
                <br />
                <input type="text" placeholder="Enter Lastname" value={Lastname} onChange={(e) => setLastname(e.target.value)} className="form-control" />
                <br />
                <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="form-control" />
                <br />
                <input type="text" value={Phonenumber} onChange={(e) => setPhonenumber(e.target.value)} placeholder="Enter Phonenumber" className="form-control" />
                <br />
                <button className="btn btn-success" style={{ width: "100%" }}>Create</button>

            </form>

        </div>
    )
}

export default Create