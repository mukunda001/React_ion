// src/App.jsx
import Header from "./components/Header"
import Entry from "./components/Entry"

// We export ONE main component that contains all the others
export default function App() {
  return (
    <>
      <Header/>
      <Entry
      img = {{
        src: "/Japan_fuji.jpeg",
        alt: "japan-image"      
      }}
      country = "Japan"
      link = "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/place/Japan/data%3D!4m2!3m1!1s0x34674e0fd77f192f:0xf54275d47c665244%3Fsa%3DX%26ved%3D1t:242%26ictx%3D111&ved=2ahUKEwjDoqDKuaeUAxV8TWwGHat1DpQQ8gF6BAgeEAI&usg=AOvVaw1HXdgivHDnteP4lAzDDjSH"
      text = {`Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet).
                     It is an active stratovolcano that last erupted in 1707. Mount Fuji is a popular destination
                      for tourists and climbers, offering stunning views and a unique cultural experience.`}
      title = "Mount Fuji"
      date = "11 Jan, 2023 - 16 Jan, 2023"
     />

     <Entry
     
     
     />
    </>
  )
} 