import "../css/Success.css"
import { useNavigate } from "react-router-dom";
import { Button,Typography } from "@mui/material"
export default function Congrats(){
    let navigate=useNavigate()
    return <div class="Success">
            <Typography className="h2S" variant="h2" >Great Job</Typography>
            <Typography className="h4S" variant="h4">You succesfully guessed all of the images</Typography>
            <div >
            <Button className="Successbutton" onClick={()=>navigate("/")}>Back to Home</Button>
            </div>
            
        
    </div>
}