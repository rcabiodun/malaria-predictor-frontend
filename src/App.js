import LoginPng from './img/login.png'
import './css/App.css';
import Lottie from 'react-lottie'
import lottieLoader from './lottie/lottieloader';
import NavBar from './nav';

function App() {
  return (
    <div>
      <NavBar/>
    <div className="f-section"> 
      <div id="f-text">
        <h1 id="f-year">since 2009
        </h1>
        <h1 id="f-head">Quality drugs handpicked <br/>for you</h1>
        <h2 className="f-subtext">Fest Plus Pharmacy is a retail outlet driven towards <br/>giving you high quality pharmaceutical drugs and <br/> products, tailored towards your bodily needs.</h2>
        <div id="f-footer" >
          <a className="nav-link-btn" >Shop Now</a>

          <a className="nav-link-btn2" >Speak with a Pharmacist</a>
      
        </div>

      </div>

        <div style={{"display":"flex","flex": 1}}>
          <Lottie options={lottieLoader(1)} height={"100%"}
        width={"100%"}></Lottie>
        </div>
            

    </div>
    <div className="f-section" style={{"margin-top": "3rem","padding-bottom": "8rem"}}> 

      <div style={{"display":"flex","flex": "1"}}>
        <Lottie options={lottieLoader(2)} height={"100%"}
          width={"100%"}></Lottie>
      </div>

      <div id="f-text" style={{"justify-content": "center", "align-items":"center "}}>
          
        <div className="f-sub">
            <h1 style={{"font-family":"Poppins","color":"#292F36"}}>Secure supply chain</h1>
            <h3 className="f-subtext">
                We obtain pharmaceutical drugs and products directly from manufacturers and trusted wholesalers, to ensure quality is kept at a premium.
            </h3>     
        </div>

        <div className="f-sub">
          <h1 style={{"font-family":"Poppins","color":"#292F36"}}>Over a decade of experience</h1>
          <h3 className="f-subtext">
              With vast experience in pharma retail spanning over 14 years. We have been dispensing and prescribed quality drugs over these years. 
          </h3>     
        </div>

      </div>
    </div>
    <div id="bubble-section">
      <h3 style={{"font-family": "Poppins", "font-size": "1.2rem" , "font-weight": "400", "color": "#292F36"}}>All you have to do is</h3>
      <div id="bubble-area">
          <div className="bubbles" style={{"background-color":"#FFEBEB"}}>
              <h2 className="bubble-text" style={{"color":"#520000"}}>Speak with us or visit <br/>  us to get a prescription <br/>  that would suit you.</h2>
          </div>
          <div className="bubbles" style={{"background-color":"#FFFCEB"}}>
              <h2 className="bubble-text"style={{"color": "#665500"}}>Tell us where you <br/> would like it delivered, and make<br/>  your payment.</h2>
          </div>
          <div className="bubbles" style={{"background-color":"#EFFBFA"}}>
              <h2 className="bubble-text" style={{"color":"#14524D"}}>Get your meds<br/> delivered to  you on<br/>  time.</h2>
          </div>

      </div>
  </div>
  <div className="f-section" style={{"margin-top":"5rem","padding-bottom": "8rem"}}> 

    <div style={{"display":"flex",flex: 1}}>
    <img src={LoginPng} width="500" height="700" alt="pic of phone"/>  

    </div>

    <div id="f-text" style={{"justify-content": "center", "align-items":"center"}}>
        <div className="f-container">
            <div className="f-container-number">
                <h2 className="numbering">1</h2>

            </div>
            <div className="f-sub" style={{"margin-left": "2.4rem"}}>
                <h1 style={{"font-family":"Poppins",color:"#292F36"}}>Create an account</h1>
                <h3 className="f-subtext" style={{color: "#292F36"}}>
                    Download the app and signup with your phone number and password.
                </h3>     
            </div>

        </div>
        
        
        <div className="f-container">
            <div className="f-container-number">
                <h2 className="numbering">2</h2>
            </div>
            <div className="f-sub" style={{"margin-left": "2.4rem"}}>
                <h1 style={{"font-family":"Poppins",color:"#292F36"}}>Add your family</h1>
                <h3 className="f-subtext" style={{color: "#292F36;"}}>
                    You have the ability to add up to three family members to your plan.

                </h3>     
            </div>
        </div>
        
        <div className="f-container">
            <div className="f-container-number">
                <h2 className="numbering">3</h2>
            </div>
            <div className="f-sub" style={{"margin-left": "2.4rem"}}>
                <h1 style={{"font-family":'Poppins',color:"#292F36"}}>Never miss an update</h1>
                <h3 className="f-subtext"style={{color: "#292F36"}}>
                    Receive a notification, whenever you or a family member forgets to take their meds, or you need to rest properly for effective.

                </h3>     
            </div>
        </div>

    </div>
</div>

</div>
  );
}

export default App;
