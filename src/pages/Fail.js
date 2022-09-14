
import{useNavigate,useParams} from "react-router-dom"
export default function Fail(){
let navigator = useNavigate()
let{score}=useParams()
    return <div>
            <h1>FAILED {score+"/5"}</h1>
            <button onClick={()=>navigator("/")}>Back to Home</button>
        
    </div>
}