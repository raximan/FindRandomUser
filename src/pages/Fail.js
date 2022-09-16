
import{useNavigate,useParams} from "react-router-dom"
export default function Fail(){
let navigator = useNavigate()
let{score}=useParams()
    return <div style={{padding:"4% 43% "}}>
            <h1>FAILED {score+"/5"}</h1>
            <div style={{padding:"15% 14%"}}>
            <button onClick={()=>navigator("/")}>Back to Home</button>
            </div>
        
    </div>
}