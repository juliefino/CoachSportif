import CookieConsent, { Cookies } from "react-cookie-consent";

function Cookie(){
    return(<CookieConsent location="bottom" cookieName="myAwesomeCookieName3" expires={999} style={{"background-color" : "#663300"}} overlay buttonText="J'ACCEPTE" buttonStyle={{fontWeight: "bolder", "background-color" : "white", "color":"darkgoldenrod"}}>
        En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de Cookies ou autres traceurs pour vous proposer des activités ciblées adaptés à votre utilisation et réaliser des statistiques de visites.

</CookieConsent>)
}
export default Cookie;
