
import minerals from './vitamins-minerals.json'
import shop from './pharmacy-store-drug-home-building-maison-mocca-animation.json'

export default function lottieLoader(num){
   return({loop: true,
    autoplay: true,
    animationData: num===1?minerals:shop,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  })

}
