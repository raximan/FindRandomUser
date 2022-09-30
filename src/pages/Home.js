import "../css/Home.css"
import {useNavigate} from "react-router-dom"
import { Button,Typography } from "@mui/material"
export default function Home(){
   let navigate =useNavigate()


return(<div className="Home">


            <Typography className="h1H" variant="h4">Welcome to Find Random User Game</Typography>
            <Typography className="h2H" variant="h5">All you need to do is guess the people by their image </Typography>
            <Typography className="h3H" variant="h6"> Look at the bottom for the answer if you feel stuck</Typography>
            <Button className="Buttonhey" onClick={()=>navigate("/game")}>Press to Start</Button>
            
    </div>)
}