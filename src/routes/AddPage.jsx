import React, {useState, useContext} from 'react'
import {AppContext} from "../context/AppProvider"
function AddPage() {
    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ mobile, setMobile ] = useState("");

    const context = useContext(AppContext)

    console.log(context)
    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = {
            username: name,
            password,
            mobile
        }
        context.addData(payload)
    }

    return (
        <div>
            ADD CUSTOMER
            <form onSubmit={handleSubmit}>
                <input placeholder="username" value={name} onChange={e=>setName(e.target.value)} />
                <br/>
                <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                <br/>
                <input placeholder="mobile" value={mobile} onChange={e=>setMobile(e.target.value)} />
                <br/>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default AddPage
