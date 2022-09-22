import "../css/Home.css"
import {useNavigate} from "react-router-dom"
import { Button,Typography } from "@mui/material"
// import {AnimatedBg} from  "react-animated-bg";
export default function Home(){
   let navigate =useNavigate()


return(<div className="Home">
{/* 
            <AnimatedBg colors={imageUrls}
            duration={2}
            delay={1}
            timingFunction="ease-out"
            className="animated-section animated-images">
              <button  onClick={()=>navigate("/game")}>Press to Start</button>
            </AnimatedBg> */}


            <Typography className="h1" variant="h4">Welcome to Find Random User Game</Typography>
            <Typography className="h2" variant="h5">All you need to do is guess the people by their image </Typography>
            <Typography className="h3" variant="h6"> Look at the bottom for the answer if you feel stuck</Typography>
          
            <Button className="Buttonhey" onClick={()=>navigate("/game")}>Press to Start</Button>
            
    </div>)
}