import { FaMapMarkerAlt } from "react-icons/fa"
export default function Entry(){
    return(
        <article className="entry-journal">
            <div className= "japan-image-container">
                <img src="/Japan_fuji.jpeg"  className = "japan-image"alt="japan-image"/>
            </div>
            <div>
               <FaMapMarkerAlt className="marker-icon" />
               <span> Japan</span>
                <a href = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/place/Japan/data%3D!4m2!3m1!1s0x34674e0fd77f192f:0xf54275d47c665244%3Fsa%3DX%26ved%3D1t:242%26ictx%3D111&ved=2ahUKEwjDoqDKuaeUAxV8TWwGHat1DpQQ8gF6BAgeEAI&usg=AOvVaw1HXdgivHDnteP4lAzDDjSH" target= "_blank" rel= "noreferrer" >
                View On Google Maps</a>
                <h2 className = "journal-title"> Mount Fuji </h2>
                <p className= "entry-date">11 Jan, 2023 - 16 Jan, 2023</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet).
                     It is an active stratovolcano that last erupted in 1707. Mount Fuji is a popular destination
                      for tourists and climbers, offering stunning views and a unique cultural experience.</p>
            </div>
        </article>
    )   
}