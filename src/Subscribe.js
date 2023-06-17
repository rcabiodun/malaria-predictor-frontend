import LoginPng from './img/login.png'
import { useEffect, useState } from 'react';
import './css/App.css';
import './css/Examine.css';
import NavBar from './nav';


function Subscription() {
    const [name, setName] = useState(true);
    const [email, setemail] = useState("");
    const [result, setResult] = useState("Submit your email to subscribe to our newsletter")


    function handlesubmit(event) {
        event.preventDefault()
    }

    async function sub(event) {
        event.preventDefault()
        setResult("Submitting...")
        const requestOptions = {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        }

        try {
            console.log("Trying to log you in")
            let response = await fetch(`http://127.0.0.1:8000/apiv1/submitEmail`, requestOptions)
            let result = await response.json()
            console.log(result)
            setResult(result.message)
        }
        catch (err) {
            setResult("Connection Error")

        }

    }
    const SYMPTOMS = [{
        description: "Have you been experiencing itchin of late",
        stateFunc: setemail,
        state: email,
        backgroundColor: "#FFEBEB",
        color: "#520000"
    },]


    return (
        <div id="container">
            <NavBar />
            <div id="formContainer">
                <form onSubmit={async (event) => { await sub(event) }}>
                    {SYMPTOMS.map((v, i) => {
                        return (
                            <div className="form-fields" style={{ backgroundColor: v.backgroundColor }}>
                                <label style={{ color: v.color }}>{"Email"}

                                </label>
                                <input
                                    id="emailField"
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        v.stateFunc(e.target.value)

                                    }}
                                />
                            </div>
                        )

                    })}

                    <input class="nav-link-btn3" type="submit" onSubmit={sub}>
                       
                    </input>
                    <h3 id="DescriptionTxt">{result}</h3>



                </form>
            </div>
        </div>

    )
}

export default Subscription;
