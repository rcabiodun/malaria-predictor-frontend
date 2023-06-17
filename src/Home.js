import LoginPng from './img/login.png'
import './css/App.css';
import Lottie from 'react-lottie'
import lottieLoader, { LastlottieLoader } from './lottie/lottieloader';
import NavBar from './nav';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <NavBar />

            <div className="f-section">
                <div id="f-text">
                    <h1 id="f-year">W.H.O
                    </h1>
                    <h1 id="f-head">Malaria,a deadly <br />but cureable disease.</h1>
                    <h2 className="f-subtext">
                        Malaria is a life-threatening disease caused by parasites that are transmitted to people through the
                        bites of infected female Anopheles mosquitoes. It is preventable and curable. In 2021, there were an estimated 247 million cases of malaria worldwide.
                        The estimated number of malaria deaths stood at 619 000 in 2021.
                    </h2>
                    <div id="f-footer" >

                        <Link to="/examine" style={{ textDecoration: "none" }}>

                            <a className="nav-link-btn3" >Take a test</a>
                        </Link>
                            <a className="nav-link-btn2" >Subscribe to news letter</a>

                    </div>

                </div>

                <div style={{ "display": "flex", "flex": 1 }}>
                    <Lottie options={lottieLoader(1)} height={"100%"}
                        width={"90%"}></Lottie>
                </div>


            </div>
            <div className="f-section" style={{ "marginTop": "3rem", "paddingBottom": "8rem" }}>

                <div style={{ "display": "flex", "flex": "1" }}>
                    <Lottie options={lottieLoader(2)} height={"100%"}
                        width={"90%"}></Lottie>
                </div>

                <div id="f-text" style={{ "justifyContent": "center", "alignItems": "center " }}>

                    <div className="f-sub">
                        <h1 style={{ "fontFamily": "Poppins", "color": "#292F36" }}>How is it transmitted?</h1>
                        <h3 className="f-subtext">
                            Malaria is not contagious and cannot spread from one person to another; the disease is transmitted through the bites of female Anopheles mosquitoes.  Five species of parasites can cause malaria in humans and 2 of these species – Plasmodium falciparum and Plasmodium vivax – pose the greatest threat.
                        </h3>
                    </div>

                    <div className="f-sub">
                        <h1 style={{ "fontFamily": "Poppins", "color": "#292F36" }}>Who is at risk?</h1>
                        <h3 className="f-subtext">
                            Some people are more susceptible to developing severe malaria than others. Infants and children under 5 years of age, pregnant women and patients with HIV/AIDS are at particular risk.
                        </h3>
                    </div>

                </div>
            </div>
            <hr style={{ width: "100%" }} />
            <div id="bubble-section">
                <h3 style={{ "fontFamily": "Poppins", "fontSize": "1.4rem", "fontWeight": "400", "color": "#292F36" }}>Measures to help prevent malaria </h3>
                <div id="bubble-area">
                    <div className="bubbles" style={{ "backgroundColor": "#FFEBEB" }}>
                        <h2 className="bubble-text" style={{ "color": "#520000" }}>
                            Insecticide-treated nets,<br /> which prevent bites while people sleep </h2>
                    </div>
                    <div className="bubbles" style={{ "backgroundColor": "#FFFCEB" }}>
                        <h2 className="bubble-text" style={{ "color": "#665500" }}> Although designed to treat patients <br />infected with malaria,<br /> some antimalarial medicines can also be used to <br />prevent the disease. </h2>
                    </div>
                    <div className="bubbles" style={{ "backgroundColor": "#EFFBFA" }}>
                        <h2 className="bubble-text" style={{ "color": "#14524D" }}>Indoor residual spraying,<br /> which is the application of <br />an insecticide to surfaces <br />where mosquitoes<br /> tend to res</h2>
                    </div>

                </div>
            </div>
            <hr style={{ width: "100%" }}/>
            <div className="f-section" style={{ "marginTop": "5rem", "paddingBottom": "8rem" }}>

                <div style={{ "flex": 1 }}>
                    <Lottie options={LastlottieLoader()} height={"100%"}
                        width={"100%"}></Lottie>
                </div>


                <div id="f-text" style={{ "justifyContent": "center", "alignItems": "center" }}>
                    <div className="f-container">
                        <div className="f-container-number">
                            <h2 className="numbering">1</h2>

                        </div>
                        <div className="f-sub" style={{ "marginLeft": "2.4rem" }}>
                            <h1 style={{ "fontFamily": "Poppins", color: "#292F36" }}>Know your symptoms</h1>
                            <h3 className="f-subtext" style={{ color: "#292F36" }}>
                                Try and identify the symptoms your having.How has your body feeling recently.
                            </h3>
                        </div>

                    </div>


                    <div className="f-container">
                        <div className="f-container-number">
                            <h2 className="numbering">2</h2>
                        </div>
                        <div className="f-sub" style={{ "marginLeft": "2.4rem" }}>
                            <h1 style={{ "fontFamily": "Poppins", color: "#292F36" }}>Take a simple test</h1>
                            <h3 className="f-subtext" style={{ color: "#292F36;" }}>
                                The ML-model will then ask you a couple of questions and if answered correctly
                                ,would be able to determine whether you have malaria or not.

                            </h3>
                        </div>
                    </div>

                    <div className="f-container">
                        <div className="f-container-number">
                            <h2 className="numbering">3</h2>
                        </div>
                        <div className="f-sub" style={{ "marginLeft": "2.4rem" }}>
                            <h1 style={{ "fontFamily": 'Poppins', color: "#292F36" }}>Never miss an update</h1>
                            <h3 className="f-subtext" style={{ color: "#292F36" }}>
                                Receive a notifications through your mail, to get tips on how to prevent malaria .

                            </h3>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Home;
