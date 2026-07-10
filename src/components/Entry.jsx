

import { FaMapMarkerAlt } from "react-icons/fa"
export default function Entry(props){
    return(
        <article className="entry-journal">
            <div className= "image-container">
                <img src= {props.img.src}  className = "location-image" alt={props.img.alt}/>
            </div>
            <div className = "info-container">
               <FaMapMarkerAlt className="marker-icon" />
               <span>{props.country}</span>
                <a href = {props.googleMapsLink} target= "_blank" rel= "noreferrer" >
                View On Google Maps</a>
                <h2 className = "journal-title"> {props.title} </h2>
                <p className= "entry-date">{props.dates}</p>
                <p className = "entry-text"> {props.text}</p>
            </div>
        </article>
    )   
}  