
import  onlineDoctor from './medicine-online.json'
import welcomePatient from './doctor-welcoming-patient.json'
import shop from './medical-frontliners.json'

export default function lottieLoader(num){
   return({loop: true,
    autoplay: true,
    animationData: num===1?welcomePatient:shop,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  })

}


export function LastlottieLoader(){
  return({loop: true,
   autoplay: true,
   animationData: onlineDoctor,
   rendererSettings: {
     preserveAspectRatio: "xMidYMid slice"
   }
 })

}
