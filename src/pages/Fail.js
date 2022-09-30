import "../css/Fail.css"
import{useNavigate,useParams} from "react-router-dom"
import { Button,Typography } from "@mui/material"
export default function Fail(){
let navigator = useNavigate()
let{score}=useParams()
    return <div class="Fail" >
            <Typography classname= "h3s" variant="h3">FAILED {score+"/5"}</Typography>
            <Button class="Failbutton" onClick={()=>navigator("/")}>Back to Home</Button>
            </div>
}