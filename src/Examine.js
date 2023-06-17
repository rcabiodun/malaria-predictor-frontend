import LoginPng from './img/login.png'
import { useEffect, useState } from 'react';
import './css/App.css';
import './css/Examine.css';
import NavBar from './nav';


function Examine() {
    const [itching, setItching] = useState("false");
    const [chills, setChills] = useState("false");
    const [vomiting, setVomitting] = useState("false");
    const [high_fever, setFever] = useState("false");
    const [loss_of_appetite, set_loss_of_appetite] = useState("false")
    const [fatigue, setFatigue] = useState("false")
    const [sweating, setSweating] = useState("false")
    const [headache, setHeadache] = useState("false")
    const [nausea, setNausea] = useState("false")
    const [muscle_pain, setMuscle_pain] = useState("false")
    const [result, setResult] = useState("")




    async function sub(event) {
        event.preventDefault()
        console.log({ high_fever, itching, chills, vomiting, loss_of_appetite, fatigue, sweating, headache, nausea, muscle_pain })
        setResult("Examining Symptoms...")
        const requestOptions = {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ high_fever, itching, chills, vomiting, loss_of_appetite, fatigue, sweating, headache, nausea, muscle_pain })
        }

        try {
            console.log("Trying to log you in")
            let response = await fetch(`http://127.0.0.1:8000/apiv1/predict`, requestOptions)
            let result = await response.json()
            console.log(result)
            setResult(`Result: ${result.message}`)
        }
        catch (err) {
            setResult("Model not available")
            console.log(err)
        }

    }
    const SYMPTOMS = [{
        description: "Have you been experiencing itchin of late",
        stateFunc: setItching,
        state: itching,
        backgroundColor: "#FFEBEB",
        color: "#520000"
    }, {
        description: "Have you been experiencing high fever",
        stateFunc: setFever,
        state: high_fever,
        backgroundColor: "#FFFCEB",
        color: "#665500"

    }, {
        description: "Have you been feeling cold",
        stateFunc: setChills,
        state: chills,
        backgroundColor: "#EFFBFA",
        color: "#14524D"


    }, {
        description: "Have you been vomitting or have vomitted recently",
        stateFunc: setVomitting,
        state: vomiting,
        backgroundColor: "#FFEBEB",
        color: "#520000"

    }, {
        description: "Have you been experiencing loss of appetite",
        stateFunc: set_loss_of_appetite,
        state: loss_of_appetite,
        backgroundColor: "#FFFCEB",
        color: "#665500"

    }, {
        description: "Have you been feeling tired ",
        stateFunc: setFatigue,
        state: fatigue,
        backgroundColor: "#EFFBFA",
        color: "#14524D"


    },
    {
        description: "Have you been sweating alot recently",
        stateFunc: setSweating,
        state: sweating,
        backgroundColor: "#FFEBEB",
        color: "#520000"

    },
    {
        description: "Have you been experiencing headache's",
        stateFunc: setHeadache,
        state: headache,
        backgroundColor: "#FFFCEB",
        color: "#665500"

    },
    {
        description: "Have you been experiencing nausea",
        stateFunc: setNausea,
        state: nausea,
        backgroundColor: "#EFFBFA",
        color: "#14524D"

    },
    {
        description: "Have you been experiencing body/muscle pain",
        stateFunc: setMuscle_pain,
        state: muscle_pain,
        backgroundColor: "#FFEBEB",
        color: "#520000"

    },]


    return (
        <div id="container">
            <NavBar />
            <div id="formContainer">
                <h3 id="infoTxt">Check the box for yes and leave blank for no</h3>
                <form onSubmit={async (event) => { await sub(event) }}>
                    {SYMPTOMS.map((v, i) => {
                        return (
                            <div className="form-fields" style={{ backgroundColor: v.backgroundColor }}>
                                <label style={{ color: v.color }}>{v.description}

                                </label>

                                <div id='check-section'>

                                    <div className="check-boxes">
                                        <label style={{ color: v.color }}>YES

                                        </label>
                                        <input
                                            type="checkbox"
                                            value={v.state}
                                            onChange={(e) => {

                                                v.state==="true"?v.stateFunc("false"):v.stateFunc("true")

                                            }}

                                        />
                                    </div>

                                   

                                </div>

                            </div>
                        )

                    })}

                    <input class="nav-link-btn3" type="submit" onSubmit={sub}></input>
                    <h3 id="resultTxt">{result}</h3>



                </form>
            </div>
        </div>

    )
}

export default Examine;
